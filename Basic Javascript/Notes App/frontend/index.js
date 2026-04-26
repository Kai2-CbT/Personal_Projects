/*

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

document.getElementById("rollDice_1").onclick = function() {
    dice_1 = Math.floor(Math.random() * max) + min;
    document.getElementById("dice_1_display").textContent = dice_1;
    document.getElementById("dice_2_display").textContent = "";
    document.getElementById("dice_3_display").textContent = "";

let total = document.getElementById("total_counter");
    let totalValue;

    totalValue = dice_1;

    total.textContent = totalValue;
};

document.getElementById("roll2Dice").onclick = function(){
    dice_1 = Math.floor(Math.random() * max) + min;
    dice_2 = Math.floor(Math.random() * max) + min;
    document.getElementById("dice_1_display").textContent = dice_1;
    document.getElementById("dice_2_display").textContent = dice_2;
    document.getElementById("dice_3_display").textContent = "";

    let total = document.getElementById("total_counter");
    let totalValue;

    totalValue = dice_1 + dice_2;

    total.textContent = totalValue;
};

document.getElementById("roll3Dice").onclick = function(){
    dice_1 = Math.floor(Math.random() * max) + min;
    dice_2 = Math.floor(Math.random() * max) + min;
    dice_3 = Math.floor(Math.random() * max) + min;
    document.getElementById("dice_1_display").textContent = dice_1;
    document.getElementById("dice_2_display").textContent = dice_2;
    document.getElementById("dice_3_display").textContent = dice_3;
    let total = document.getElementById("total_counter");
    let totalValue;

    totalValue = dice_1 + dice_2 + dice_3;

    total.textContent = totalValue;
};
*/


  const titleInput = document.querySelector("input");
  const noteInput = document.querySelector("textarea");
  const saveButton = document.querySelector("button");
  const notesList = document.querySelector(".notes-list");

  saveButton.onclick = function () {
    const title = titleInput.value;
    const note = noteInput.value;

    if (title === "" || note === "") {
      alert("Please write a title and note!");
      return;
    }

    const noteCard = document.createElement("div");
    noteCard.className = "note-card";

    noteCard.innerHTML = `
      <h2>${title}</h2>
      <p>${note}</p>
    `;

    notesList.appendChild(noteCard);

    titleInput.value = "";
    noteInput.value = "";
  };
