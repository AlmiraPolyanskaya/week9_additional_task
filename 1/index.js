const rate = 18.5;

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
    console.log('Ваш депозит на начало расчётного периода составлял ' + form.money.value + ' руб.');
    console.log('Согласно вашему тарифу, вам была присвоена ставка ' + rate + '%');
    console.log('К концу расчётного периода прирост составил ' + income + ' руб., и на данный момент ваш депозит составляет ' + result + 'руб.');
}

form.money.addEventListener("input", dataVisualization);
form.months.addEventListener("input", dataVisualization);

dataVisualization();