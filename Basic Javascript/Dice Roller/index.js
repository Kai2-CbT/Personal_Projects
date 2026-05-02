//program needs to allow user to input a number of dice to roll
let diceResult = document.getElementById("diceDisplay");
let diceImage = document.getElementById("diceImage");
//then a function that is called to roll dice X number of input
function diceRoll(){
    const diceNum = document.getElementById("diceValue").value;
    Number(diceNum);

    //array to store dice roll values
    let values = [];
    //array for dice images
    const images = [];

    //for loop to roll dice for number of dice
    for(i = 0; i < diceNum; i++ ){
        //generate a random number between 1-6 and store it in the array.
        const value = Math.floor(Math.random() * 6 + 1);
        //push the rolled value into the array values
        values.push(value);
        //push 
        images.push(`<img src="images/${value}.png">`);

    }
    diceResult.textContent = `dice: ${values.join(' ')}`;
    diceImage.innerHTML = images.join(` `);
}

//store each dice result as part of an array, then just display each element in the array.