const form = document.querySelector("form");
const textArea = document.querySelector("textarea");

// textArea.addEventListener("input", function () {
//   let value = textArea.value.split("");

//   // Capitalize the very first character if it is a letter
//   if (/[a-zA-Z]/.test(value[0])) {
//     value[0] = value[0].toUpperCase();
//   }

//   // Loop through the entire text
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] === ".") {
//       // Look ahead for the next alphabet character (skip spaces)
//       let j = i + 1;
//       while (j < value.length && value[j] === " ") {
//         j++; // Skip spaces
//       }

//       if (j < value.length && /[a-zA-Z]/.test(value[j])) {
//         value[j] = value[j].toUpperCase();
//       }
//     }
//   }
// });

textArea.addEventListener("input", function () {
  let value = textArea.value.split("");
  let result = [];
  let capitalize = true;

  for (char of value) {
    if (capitalize && /[a-zA-Z]/.test(char)) {
      result.push(char.toUpperCase());
      capitalize = false;
    } else {
      result.push(char);
    }
    if (char === "." || char === "!" || char === "?") {
      capitalize = true;
    }
  }
  textArea.value = result.join("");
});
