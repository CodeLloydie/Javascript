const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

const counterValue = document.getElementById('counter-value');

let count = 0;

// incrementBtn.onclick = function() {
//     count++;
//     counterValue.textContent = count;
// };

// decrementBtn.onclick = function() {
//     count--;
//     counterValue.textContent = count;
// };

// resetBtn.onclick = function() {
//     count = 0;
//     counterValue.textContent = count;
// };


//cleaner way using addEventListener

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counterValue.textContent = count;
};

