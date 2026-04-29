//first read the input from the textbox
document.getElementById("calculate").onclick = function(){
    //save value as a variable
    let initial = document.getElementById("textbox").value;
    //set radio choices as variables
    const celcius = document.getElementById("toFar");
    const fahrenheit = document.getElementById("toCel");
    let final;

    //if a certain choice is selected, run different methods
    if(celcius.checked){
        final = toFahrenheit(initial)
        document.getElementById("result").textContent = final + " Fahrenheit";
    }
    else if(fahrenheit.checked){
        final = toCelcius(initial)
        document.getElementById("result").textContent = final + " Celcius";

    }
    else{
        window.alert("please select a formula");
    }

    
}

//seperate functions for conversions
function toFahrenheit(initial){
    let final = initial * 1.8 + 32;
    return final;
}

function toCelcius(initial){
    let final = (initial - 32) / 1.8;
    return final;
}
//