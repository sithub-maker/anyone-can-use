let Array = [];
let counter = 0;
let result;

result = setInterval(() => {
  Array.push(counter);
  counter++;
  
},1000);

document.addEventListener("keydpress", (event) => {
  if (event.key === "Escape") {
    clearInterval(result);
    console.log(Array);
  }
});
