const rate = 7;
let form = document.forms.calculator;

function dataVisualization() {
    let initial = +form.money.value;
    if (!initial) return;
    let interest = rate / 100;
    if (!interest) return;
    let years = form.months.value / 12;
    if (!years) return;

    let income = Math.round(initial * interest * years);
    let result = Math.round(initial * (1 + interest * years));

    window["money-before"].innerHTML = initial;
    window["money-after"].innerHTML = result;
    console.log('Через год у вас будет ' + result + ' руб. на счету.');
}

form.money.addEventListener("input", dataVisualization);
form.months.addEventListener("input", dataVisualization);

dataVisualization();