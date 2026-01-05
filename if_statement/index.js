let checkAgeBtn = document.getElementById('checkAgeBtn');
let result = document.getElementById('result');

checkAgeBtn.onclick = function() {
    let ageInput = document.getElementById('age').value;
    ageInput = Number(ageInput);

    if (ageInput < 0) { "You haven't been born yet!" }
    else if (ageInput < 13) {
        result.textContent = "You are a child.";
    } else if (ageInput < 20) {
        result.textContent = "You are a teenager.";
    } else if (ageInput < 65) {
        result.textContent = "You are an adult.";
    } else {
        result.textContent = "You are a senior citizen.";
    }


}