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
    let attempts = 0;
    //then loop for guesses
    while(running){
        guess = window.prompt("guess number between 1 - 100")
        
        if(guess === null){
                window.alert("Game cancelled");
                running = false;
                break;
            }

            guess = Number(guess)
        if(isNaN(guess)){
            window.alert("enter an actual number")
        }
        else{

        
        attempts++;
        //conditional checks
        if(guess < answer){
            window.alert("Too low!");
        }
        else if (guess > answer){
            window.alert("Too High!");
        }
        else{
            window.alert("correct!");
            running = false;
        }
    };


    };
    document.getElementById("attempts_counter").textContent = attempts;

    
}