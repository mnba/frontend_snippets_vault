// Created by R♡$€☆

window.onload=()=>{
    

var editor = ace.edit('editor');
editor.setTheme('ace/theme/monokai');
editor.session.setMode('ace/mode/html');
editor.setValue(`<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        
    </body>
</html>`);

const iframe = document.getElementById('output');
const button = document.getElementsByTagName('button')[0];

let clicked = false;
button.addEventListener('click', () => {
    if (!clicked) {
        button.textContent = 'Back to Editor';
        clicked = true;
        const code = editor.getValue();
        iframe.style.display = 'block';
        const output = iframe.contentWindow.document;
        output.open();
        output.write(code);
        output.close();
    } else {
        button.textContent = 'Run';
        clicked = false;
        iframe.style.display = 'none';
    }
});


}
