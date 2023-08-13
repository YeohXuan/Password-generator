const ps1 = document.getElementById('ps-1')
const ps2 = document.getElementById('ps-2')
const uOption = document.getElementById('ps1')
const lOption = document.getElementById('ps2')
const nOption = document.getElementById('ps3')
const sOption = document.getElementById('ps4')

const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

function generatePs() {
    let sum = []
    ps1.textContent = sum
    ps2.textContent = sum

    if (uOption.checked && lOption.checked && nOption.checked && sOption.checked) {
        sum = uppercase.concat(lowercase).concat(numbers).concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked && lOption.checked && nOption.checked) {
        sum = uppercase.concat(lowercase).concat(numbers)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked && lOption.checked && sOption.checked) {
        sum = uppercase.concat(lowercase).concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked && nOption.checked && sOption.checked) {
        sum = uppercase.concat(numbers).concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (lOption.checked && nOption.checked && sOption.checked) {
        sum = lowercase.concat(numbers).concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        }     
    } else if (uOption.checked && lOption.checked) {
        sum = uppercase.concat(lowercase)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked && nOption.checked) {
        sum = uppercase.concat(numbers)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked && sOption.checked) {
        sum = uppercase.concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (lOption.checked && nOption.checked) {
        sum = lowercase.concat(numbers)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (lOption.checked && sOption.checked) {
        sum = lowercase.concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (nOption.checked && sOption.checked) {
        sum = numbers.concat(symbols)
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
            ps2.textContent += sum[ Math.floor( Math.random() * sum.length ) ]
        } 
    } else if (uOption.checked) {
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += uppercase[ Math.floor( Math.random() * uppercase.length ) ]
            ps2.textContent += uppercase[ Math.floor( Math.random() * uppercase.length ) ]
        } 
    } else if (lOption.checked) {
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += lowercase[ Math.floor( Math.random() * lowercase.length ) ]
            ps2.textContent += lowercase[ Math.floor( Math.random() * lowercase.length ) ]
        } 
    } else if (nOption.checked) {
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += numbers[ Math.floor( Math.random() * numbers.length ) ]
            ps2.textContent += numbers[ Math.floor( Math.random() * numbers.length ) ]
        } 
    } else if (sOption.checked) {
        for (let i = 0; i <= 8; i++) {
            ps1.textContent += symbols[ Math.floor( Math.random() * symbols.length ) ]
            ps2.textContent += symbols[ Math.floor( Math.random() * symbols.length ) ]
        } 
    } 
}

function copy1() {
        // Get the text content of the button
        const buttonText = ps1.textContent;
        
        // Create a temporary textarea to copy the text to the clipboard
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = buttonText;
        document.body.appendChild(tempTextarea);

        // Select and copy the text from the temporary textarea
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Provide user feedback (optional)
        if (buttonText === '') {

        } else {
            alert('Text copied to clipboard: ' + buttonText);
        }
}
function copy2() {
        // Get the text content of the button
        const buttonText = ps2.textContent;
        
        // Create a temporary textarea to copy the text to the clipboard
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = buttonText;
        document.body.appendChild(tempTextarea);

        // Select and copy the text from the temporary textarea
        tempTextarea.select();
        document.execCommand('copy');

        // Remove the temporary textarea
        document.body.removeChild(tempTextarea);

        // Provide user feedback (optional)
        if (buttonText === '') {

        } else {
            alert('Text copied to clipboard: ' + buttonText);
        }
}
function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
 }