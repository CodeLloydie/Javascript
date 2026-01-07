const dislplay = document.getElementById('display');

function appenToDisplay(input) {
    dislplay.value += input;
}

function clearDisplay() {
    dislplay.value = '';
}

function calculate() {
    try {
        dislplay.value = eval(dislplay.value);
    } catch (e) {
        dislplay.value = 'Error';
    }
}