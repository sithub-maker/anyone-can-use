const inputColor = document.getElementById('inputText');
const result = document.getElementById('block');

inputColor.addEventListener('keypress', (event)=> {
    if(event.key === 'Enter'){
        const color = inputText.value;

        result.style.backgroundColor = color;
    }
})


const myInput = document.getElementById("inputText");
document.addEventListener("keypress", (event)=> {
  if (event.key === "/") {
    inputText.focus();
    event.preventDefault();
  }
});