let allInputs = document.querySelectorAll("#bill, #people");
let billInput = document.getElementById('bill');
let personInput = document.getElementById('people');
let procents = document.querySelectorAll('button.percent');
let customTip = document.querySelector('.custom');

let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total');

let resetBtn = document.querySelector('.reset')
let errorSpan = document.querySelector('.error-span');

let tipPercentage;

resetBtn.disabled = true;

function reset() {
    billInput.value = 0;
    personInput.value = 0;
    tipPercentage = 0;
    displayTotals();
};

function tipsAddActive(event) {
    procents.forEach(each => {
        each.classList.remove('active');
        if(event.target.textContent == each.textContent) {
            each.classList.add("active");
            tipPercentage = Number(each.value/100);
            displayTotals();
        };
    });
};

function displayTotals() {
    if (tipPercentage && billInput.value && personInput.value) {
        let tip = (billInput.value * tipPercentage / personInput.value);
        let total = ((Number(billInput.value) + tip)/ personInput.value).toFixed(2);
        totalAmount.textContent = `$${total}`;
        tipAmount.textContent = `$${tip.toFixed(2)}`;

        resetBtn.disabled = false;
    }
    else {
        tipAmount.textContent = "$0.00";
        totalAmount.textContent = "$0.00";
        resetBtn.disabled = true;
    };
};

procents.forEach(each => {
    each.addEventListener('click', tipsAddActive);
});

customTip.addEventListener('input', () => {
    tipPercentage = Number(customTip.value/100);
    displayTotals();
});

personInput.addEventListener('input', () => {
    if (personInput.value < 1 || personInput.value % 1 != 0) {
        personInput.style.borderColor = '#E17052';
        errorSpan.style.display = 'block';
    }
    else {
        personInput.style.border = 'none';
        errorSpan.style.display = 'none';
    };
});

allInputs.forEach(element => {
    element.addEventListener('input', () => displayTotals());
});

resetBtn.addEventListener('click', () => reset());
