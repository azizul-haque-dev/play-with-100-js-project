const input = document.querySelector("input");
const alertBox = document.querySelector(".alert");

let tryCount = 0;

function alertMsg(cls, msg) {
  alertBox.innerHTML = `<p class="${cls}">${msg}</p>`;
}

const randomNum = () => Math.floor(Math.random() * 10) + 1;
let res = randomNum();

input.addEventListener("input", function () {
  const val = Number(input.value);

  tryCount++;

  if (val < res) {
    alertMsg("danger", "Value is too low");
  } else if (val > res) {
    alertMsg("danger", "Value is too high");
  } else {
    alertMsg("success", `You got the value on try #${tryCount}`);
  }
});
