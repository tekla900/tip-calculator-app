let billInput = document.getElementById('bill');
let personInput = document.getElementById('people');
let procents = document.querySelectorAll('button.percent');
let customTip = document.querySelector('.custom');

let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total');

let resetBtn = document.querySelector('.reset')

let tip_percentage;

resetBtn.disabled = true;
// let allInputs = document.querySelectorAll('span.test:not(.asd)');
let allInputs = document.querySelectorAll("#bill, #people");

allInputs.forEach(element => {
    element.addEventListener('input', () => displayTotals());
});

procents.forEach(each => {
    each.addEventListener('click', () => {
        tip_percentage = Number(each.value/100);
        displayTotals();
    });
});

customTip.addEventListener('input', () => {
    tip_percentage = Number(customTip.value/100);
    displayTotals();
});

// billInput.addEventListener('input', () => {
//     displayTotals();
// });

// personInput.addEventListener('input', () => {
//     displayTotals();
// });

function displayTotals() {
    if (tip_percentage && billInput.value && personInput.value) {
        let tip = (billInput.value * tip_percentage / personInput.value);
        let total = ((Number(billInput.value) + tip)/ personInput.value).toFixed(2);
        totalAmount.textContent = `$${total}`;
        tipAmount.textContent = `$${tip.toFixed(2)}`;

        resetBtn.disabled = false;
    };  
};

// displayTotals();