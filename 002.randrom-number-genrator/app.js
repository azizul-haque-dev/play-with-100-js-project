
let randomNum;
const randomVal = document.querySelector('.value span')
const btn = document.querySelector('.generate')
const minVal = document.querySelector('.min-value')
const maxVal = document.querySelector('.max-value')
const digitVal = document.querySelector('.digit-value')
let min ='';
let max ='';
function generateRandomNum (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
digitVal.addEventListener('input', () => {
    let val = Number(digitVal.value); // Convert input to number
    if (val && /^[0-9]$/.test(val)) {
      for (let i = 0; i < val; i++) {
        min += 1;
        max += 9;
      }   
    } else {
    alert("Please enter a valid one digit number.");
    }
    minVal.value= min
    maxVal.value= max
  });

btn.addEventListener('click',function(){
    randomNum = generateRandomNum(parseInt(maxVal.value) ,parseInt(minVal.value))

    randomVal.innerHTML= randomNum
})
