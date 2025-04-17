const form = document.querySelector("form");
const textArea = document.querySelector("textarea");

// form.addEventListener('submit',function(e){
//             e.preventDefault()

// })
textArea.addEventListener("keydown", function (e) {
 
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();

    let text = textArea.value.trim().split(/[.!?]/);

    if (text.length === 1) {
       const res = text[0];
    let firstLater = res.charAt(0).toUpperCase();
    let newVal = firstLater + res.split("").slice(1).join("");
      textArea.value = newVal.trim();
        textArea.value = `${newVal} `;
    }
    if(text.length > 1){
      const res = text[text.length - 1];
      //  let firstLater = res[res.length-1].charAt(0).toUpperCase();
       console.log(res);
       
    }
   
//      let res = text.join().split(' ')
//      console.log(res[res.length-1].charAt(0))
//      let firstLater = res[res.length-1].charAt(0).toUpperCase();
//  console.log({firstLater}, '27')
//  let newVal= firstLater + res.split("").slice(1).join("");
//  textArea.value = (e.key === ' ' ? ' ' : '\n') + newVal;
   
  }
});
