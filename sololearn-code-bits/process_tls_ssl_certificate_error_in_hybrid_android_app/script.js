//Process TLS-SSL certificate error in hybrid Android app

let url  = "https://www.renshuu.org/"; 
let url2 = "https://www.google.com/"; 

//1. not working gented code 
async function fetchUrl() {
  try {
    const response = await fetch(url2, {
      // **CORS handling options (limited in browser environment):**
      mode: 'no-cors', // Indicate we don't expect access to resources
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Process the response here (e.g., convert to text or JSON)
    console.log('Successfully fetched the page!');
    
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}
//fetchUrl();



// 2 more or less working fynction, although it does not catch SSL error
async function fetchUrl2() {
  fetch(url, { mode: 'no-cors',})
  .then(async (response) => {
    // Handle successful response
    document.write("A successful response.<hr>"); //,await response.text()); //bug in Sololearn 
    //alert("OK!")
    let resp = await response.text();
    document.write("resp=", resp);
  })
  .catch(error => {
    console.error('1Error:', error);
    // Handle other connection errors
    document.write("1Error:", error);
      
    // Handle connection error
    if (error.toString().includes('SSL certificate problem')) {
      console.warn('Potential expired root certificate issue');
      // Inform user or implement fallback mechanism
      document.write("Error-Warning:", error)
    } else {
      console.error('2Error:', error);
      // Handle other connection errors
      document.write("2Error:", error);
    }
  });
}

fetchUrl2();

