let player = document.getElementById("player1");
let score = document.getElementById("score");
let button = document.getElementById("button");
let image = document.getElementById("diceImage");

let totalScore = 0; //what i want my rolling score to be

    button.addEventListener("click", function() {
            player.textContent = "Player 1"; //if a game ends i want to be able to reset 
            button.textContent ="Roll" 

        console.log("clicked roll");
        function roll(){
            return Math.ceil(Math.random(1)*6);
        };
        console.log(roll());
        let randomNum = roll(); // assigned a variable to call the function

        if (randomNum === 2) {
            image.src = './img/dice2.png';
        } else if ( randomNum === 3) {
            image.src = './img/dice3.png';
        } else if (randomNum === 4) {
            image.src = './img/dice4.png';
        } else if (randomNum === 5){
            image.src = './img/dice5.png';
        } else if (randomNum === 6) {
            image.src = './img/dice6.png';
        } else if (randomNum === 1){
            image.src = './img/dice1.png';
        }
        console.log(image.src);

        totalScore = totalScore + randomNum; // total score = total scofre plus the random number i generate everytime the button is clicked

        score.textContent = totalScore; //new value of total score will display in the tectcontent of my score id.

        if (randomNum == 1) {
            player.textContent = "You rolled a 1, loser!";
            button.textContent ="Start again"; 
            totalScore = 0;
        };

        if (totalScore > 20) {
            console.log(totalScore);
            console.log("more than 20, game to end");
            player.textContent = "Winner!";
            button.textContent ="Start again";
            totalScore = 0;
        };

    });




// if (totalScore > 20) {
//         console.log(totalScore);
//         console.log("more than 20, game to end");
//         player.textContent = "Winner!";
//         button.textContent ="Start again" 
//         totalScore = 0
//        };





// if win 

// player.textContent = "winner!";
// button.textContent = "start again";
