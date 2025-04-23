const input = document.querySelector("input");
const alertBox = document.querySelector(".alert");
const form = document.querySelector("form");

let tryCount = 0;
let isBackSpace = false;

function alertMsg(cls, msg) {
  alertBox.innerHTML = `<p class="${cls}">${msg}</p>`;
}

const randomNum = () => Math.floor(Math.random() * 10) + 1;
let res = randomNum();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let val = Number(input.value);
  console.log(val);

  tryCount++;

  if (val < res) {
    alertMsg("danger", `${val} is too low`);
    form.reset();
  } else if (val > res) {
    alertMsg("danger", `${val} is too high`);
    form.reset();
  } else {
    alertMsg("success", `You got the value on try #${tryCount}`);
  }
});
