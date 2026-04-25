document.getElementById("header_1").textContent = "Random Number Generators";

//declare variable to hold dice values.
let dice_1;
let dice_2;
let dice_3; 

//declare min and max for dice rolls
const min = 1;
const max = 6;


//display dice on screen
document.getElementById("dice_2_display").textContext = dice_2;
document.getElementById("dice_3_display").textContent = dice_3;

//add functionality to each button

document.getElementById("roll_Dice1").onclick = function(){
    dice_1 = Math.floor(Math.random() * max) + min;
    document.getElementById("dice_1_display").textContent = dice_1;

};

document.getElementById("roll2Dice").onclick = function(){

};

document.getElementById("roll3Dice").onclick = function(){

};

