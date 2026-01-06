    const inputTemperature = document.getElementById("inputTemperature");
    const toFahrenheit = document.getElementById("toFahrenheit");
    const toCelcius = document.getElementById("toCelcius");
    const outputResult = document.getElementById("outputResult");
    let convertedTemp, temp;


function convert(){
      temp = Number(inputTemperature.value);
    // fahrenheit to celsius
    if(toCelcius.checked){
        convertedTemp = (temp - 32) * 5/9;
        displayResult();
    } 
    // celsius to fahrenheit
    else if(toFahrenheit.checked){
         convertedTemp = (temp * 9/5) + 32;
        displayResult();
    }
    else {
        outputResult.textContent = "Please select a conversion type.";
    }
}

function displayResult(){
    if(toCelcius.checked){
        outputResult.textContent = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }   
    else if(toFahrenheit.checked){
        outputResult.textContent = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    }
    else{
        outputResult.textContent = "Please select a conversion type.";
    }
}