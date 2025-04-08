const btns = document.querySelectorAll('button');
const value = document.querySelector('h3');
const minusBtn = document.querySelector('button[data-id="minus"]');
const resetBtn = document.querySelector('button[data-id="reset"]');
let num = 0;
minusBtn.disabled = true;
resetBtn.disabled = true;


Array.from(btns).map(item => {
    item.addEventListener('click', function (e) {
        console.log(num)
        const btnName = e.target.dataset.id;
        if (btnName === 'plus') {
            num++
        } else if (btnName === 'minus') {
            num > 0 ? num-- : num = 0
        } else {
            num = 0
        }
        value.innerHTML = num; // value should be change inside click evant
        if (num > 0) {
            minusBtn.disabled = false;
            resetBtn.disabled = false;

        } else {
            minusBtn.disabled = true;
            resetBtn.disabled = true;

        }
    });
});



