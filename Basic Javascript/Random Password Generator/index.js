



//declare funtion to generate password

//takes arguemnts from the html
function generatePassword(passwordLength, lowercase, uppercase, numbers, symbols){
    //holds final pass
        let finalpassword = "";
        //holds characters for password type temporarily
        let allowedChars = "";

        //varaiblestrings for each type
        let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let nums = "0123456789";
        let syms = "!@#$%^&*()";

        //add characters to allowedcharacters

        if(lowercase){
            allowedChars += lowerCaseChars;
        }


        if(uppercase){
            allowedChars += upperCaseChars;
        }

        if(numbers){
            allowedChars += nums;
        }


        if(symbols){
            allowedChars += syms;
        }



        //now need to add a loop that adds only to length
        for(let i = 0; i < passwordLength; i++){
            const randomindex = Math.floor(Math.random() * allowedChars.length);
            finalpassword += allowedChars[randomindex];
        }
        document.getElementById("password").textContent = finalpassword;


    //loop
}
