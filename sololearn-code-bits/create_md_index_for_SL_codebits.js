
//create_md_index_for_SL_codebits.js
//Was: convert_extracted_SL_codes_into_md.js
// Author: M.A. 2024.06.19 
/** Convert extracted SoloLearn codes ("Code Bits" in SoloLearn) into a browsable
 *   directory of Code Snippets with use of markdown index file. 
 *  Code files are extracted from user profile in SoloLearn using specialized Chrome
 *    Extension "Sololearn Backup Extension". 
 * 
 * For how to run this see at the end of file:  in "Run this as:" 
 */
const fs = require('fs');  //for processDirectory
const path = require('path'); //for processDirectory, unzipFile
const { exec } = require('child_process'); //unzipFile

/**
 * Parses an ISO 8601 date string into a Date object.
 *
 * @param {string} dateString - The ISO 8601 date string to parse.
 * @returns {Date} The parsed Date object.
 * @throws {Error} If the input string is not a valid ISO 8601 date format.
 */
// Sample string:  '2021-05-14T14:57:17.657' 
function parseISODate(dateString) {
  // Regular expression pattern to validate ISO 8601 date format 
  //  (\d{1,3}) means: min=1 digit, max=3 digits; \.(?\d{1,3})?$/ ; (?:\.(\d{1,3}))?$/
  const isoPattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/;

  // Test the input string against the pattern
  const match = dateString.match(isoPattern);

  if (!match) {
    throw new Error('Invalid ISO 8601 date format: "'+String(dateString)+'"');
  }

  // Extract components from the matched groups
  //const [, year, month, day, hours, minutes, seconds, milliseconds] = match.map(Number);
  let [, year, month, day, hours, minutes, seconds, milliseconds] = match.map(Number);
  if (!milliseconds)
    milliseconds = 0;

  // Create a Date object with the extracted components
  const date = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);

  return date;
}

function test_parseISODate() { 
    /*const dateString = '2021-05-14T14:57:17.657';
    // Output: Fri May 14 2021 14:57:17 GMT+0000 (Coordinated Universal Time)
    const date = parseISODate(dateString);
    console.log(date); 
    */
    let error_cnt=0;

    const test_dateStrings = ['2021-05-14T14:57:17.657', '2020-04-20T12:55:06.26',   
      "2020-07-25T06:32:56.3", "2020-05-21T09:48:38"];

    for(let dateString of test_dateStrings){
      try{
        const date_i = parseISODate(dateString);
        console.log(`In ${dateString} => Out: `,date_i); 
      }
      catch (err){
        error_cnt +=1; 
        console.log(`test_parseISODate Error: ${err}`); 
      }
    }
    if (error_cnt>0){
      console.log(`Error(s): parseISODate() failed ${error_cnt} times, exiting`) ;
      process.exit(1);
    }

}
if (0) test_parseISODate();
//process.exit(1);

// to  check this
function traverseDirectory_depth1(dirPath) {
    const files = fs.readdirSync(dirPath);
  
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
  
      if (!stats.isDirectory()) 
        continue;
      const subdirFiles = fs.readdirSync(filePath);
      for (const subdirFile of subdirFiles) {
        const subdirFilePath = path.join(filePath, subdirFile);
        const subdirStats = fs.statSync(subdirFilePath);

        if (subdirStats.isFile() && subdirFile === 'metadata.json') {
            readMetadataFile(subdirFilePath);
        }
      }
    }
}

// main worker function:
function processDirectory(dirPath) {
  const projectData = [];

  function readMetadataFile(filePath) {
    try {
      const metadata = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const projectDir = path.dirname(filePath);
      const projectName = metadata.name;
      const createdDate = parseISODate(metadata.createdDate);
      const language = metadata.language;
      const publicId = metadata.publicId;

      const indexHtmlPath = path.join(projectDir, 'index.html');
      const styleCssPath = path.join(projectDir, 'style.css');
      const scriptJsPath = path.join(projectDir, 'script.js');

      const projectItem = {
        name: `[${projectName}](${indexHtmlPath})`,
        createdDate,
        language,
        publicId,
        files: []
      };

      if (fs.existsSync(styleCssPath)) {
        projectItem.files.push(`[style.css](${styleCssPath})`);
      }

      if (fs.existsSync(scriptJsPath)) {
        projectItem.files.push(`[script.js](${scriptJsPath})`);
      }

      projectData.push(projectItem);
    } catch (err) {
      console.error(`Error reading metadata file ${filePath}: ${err}`);
    }
  }

  function traverseDirectory_rec(currentPath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDirectory_rec(filePath);
      } else if (file === 'metadata.json') {
        readMetadataFile(filePath);
      }
    }
  }

  traverseDirectory_rec(dirPath);

  projectData.sort((a, b) => b.createdDate - a.createdDate);

  const markdownContent = projectData.map((project, index) => {
    const subItems = [];
    if (project.files.length > 0) {
      subItems.push(`+ files:`);
      subItems.push(...project.files.map(file_link => `  - ${file_link}`));
    }
    subItems.push ( ... [ `- language: ${project.language}`, 
      `- createdAt: ${project.createdDate.toISOString()}`,
      `- publicId: ${project.publicId}`
    ]);

    return `${index + 1}. ${project.name}\n${subItems.join('\n')}`;
  }).join('\n\n');

  return markdownContent;
}

function test_processDirectory(){   
    // Usage example
    const directoryPath = '/path/to/directory';
    const markdownContent = processDirectory(directoryPath);
    console.log(markdownContent);
}

function writeMarkdownFile(directoryPath, markdownContent) {
    //const resultFilePath = path.join(directoryPath, 'README.md');
    //FIXME Tmp debug: '../README.md' 
    const resultFilePath = path.join(directoryPath, '../README.md');
  
    try {
      fs.writeFileSync(resultFilePath, markdownContent);
      console.log(`Markdown content written to ${resultFilePath}`);
    } catch (err) {
      console.error(`Error writing Markdown file: ${err}`);
    }
}
  
// unzipFile in new Dir.
function unzipFile(zipFilePath) {
  return new Promise((resolve, reject) => {
    const zipFileName = path.basename(zipFilePath, '.zip');
    const unzippedDirPath = path.join(path.dirname(zipFilePath), zipFileName);

    // Create the new directory if it doesn't exist
    if (!fs.existsSync(unzippedDirPath)) {
      fs.mkdirSync(unzippedDirPath);
    }

    const unzipCommand = `unzip -o "${zipFilePath}" -d "${unzippedDirPath}"`;

    exec(unzipCommand, (error, stdout, stderr) => {
      if (error) {
        reject(`Error unzipping file: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
      }

      console.log(`stdout: ${stdout}`);
      resolve(unzippedDirPath);
    });
  });
}


// ***
function main1(){   
    // Usage example
    const directoryPath = '/path/to/directory';
    const markdownContent = processDirectory(directoryPath);
    console.log(markdownContent);
}

//function test_unzipFile(){
function main(zipFilePath){

    unzipFile(zipFilePath)
      .then(unzippedDirPath => {
        console.log(`Unzipped directory: ${unzippedDirPath}`); 

        // Process the Directory  with the unzippedDirPath
        const markdownContent = processDirectory(unzippedDirPath);
        writeMarkdownFile(unzippedDirPath, markdownContent);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });    
}

/* Run this as:
  //cp sololearn-111111.zip test/sololearn-code-bits.zip ; cp; cd test;

cd out/
cp ../MyCodes/create_md_index_for_SL_codebits.js ./
node ./create_md_index_for_SL_codebits.js 
cp README.md ./create_md_index_for_SL_codebits.js ./sololearn-code-bits/
// publish ./sololearn-code-bits/ on git
*/

const zippath2 = "./sololearn-code-bits.zip"; 
main(zippath2); 


