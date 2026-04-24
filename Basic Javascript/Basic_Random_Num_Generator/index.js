document.getElementById("header_1").textContent = "Counter App";

//declare variable to hold counter num + assign to 0.
let counter = 0;
//display counter on screen
document.getElementById("counter_display").textContent = counter;

//on click funtion to increase
document.getElementById("increaseBtn").onclick = function() {
    counter++;
    document.getElementById("counter_display").textContent = counter;
};

//on click function to reset
document.getElementById("resetBtn").onclick = function() {
    counter = 0;
    document.getElementById("counter_display").textContent = counter;
};

//onclick function to decrease
document.getElementById("decreaseBtn").onclick = function(){
    counter--;
    document.getElementById("counter_display").textContent = counter;
}
