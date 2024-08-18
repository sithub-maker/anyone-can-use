document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    let result1 = '';
    let result2 = '';

    for (let i = 0; i < input1.length; i++) {
      if (!input2.includes(input1[i])) {
        result1 += input1[i];
      }
    }

    for (let i = 0; i < input2.length; i++) {
      if (!input1.includes(input2[i])) {
        result2 += input2[i];
      }
    }
    document.getElementById("result").innerText = result1 + " and " + result2;
  }
});
