//logic:

//on button press, run a function

//function should have a while loop that runs until answer is correct

//need to have a variable that holds the state of the game

let start = document.getElementById("startBtn").onclick = function(){
    //first will need code that generates a random number
    const max = 100;
    const min = 1;
    const answer = Math.floor(Math.random() * max + min);
    let running = true;
    let guess;
    //then loop for guesses
    while(running){
        guess = window.prompt("guess number between 1 - 100")
        guess = Number(guess)
        alert(guess);
    };


    
}