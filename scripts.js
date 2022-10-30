console.log('hello new project');

let billInput = document.getElementById('bill');
let personInput = document.getElementById('people');
let procents = document.querySelectorAll('button.percent');

let tip_percentage;

let tipAmount = document.getElementById('tip-amount');
let totalAmount = document.getElementById('total');

procents.forEach(each => {
    each.addEventListener('click', () => {
        console.log(each.value);
        tip_percentage = Number(each.value/100);
        displayTotals();
    });
})

billInput.addEventListener('input', () => {
    displayTotals();
});

personInput.addEventListener('input', () => {
    displayTotals();
});

function displayTotals() {
    if (tip_percentage && billInput.value && personInput.value) {
        let tip = (billInput.value * tip_percentage / personInput.value);
        let total = ((Number(billInput.value) + tip)/ personInput.value).toFixed(2);
        totalAmount.textContent = `$${total}`;
        tipAmount.textContent = `$${tip.toFixed(2)}`;
    }
}

