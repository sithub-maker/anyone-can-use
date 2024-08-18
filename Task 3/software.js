inputText.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const inputText2 = inputText.value;
    const YeketakHarp = new Set(inputText2.replace(/\s+/g, "").toLowerCase());
    output.textContent = `Bu sozde ${YeketakHarp.size} sany durli harp bar!`;
  }
});
const myInput = document.getElementById("inputText");
document.addEventListener("keydown", function (event) {
  if (event.key === "/") {
    inputText.focus();
    event.preventDefault();
  }
});

let cars = ["bmw", "mercedec", "Opel", "volvo", "van"];
console.log(cars)
cars.splice( 3, 0, "Camry")
console.log(cars);