
let playerSelection = " ";
let computerWin = 0;
let playerWin = 0;

function computerPlay(){
    let hand = Math.floor(Math.random()*3+1);
    if (hand == 1){
      return "rock";
    } else if (hand == 2) {
      return "paper";
    } else {
       return "siccors";
    }
}

function playRound(playerSelection){
 playerSelection = prompt("Enter: ", "Rock").toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        return "Tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "Computer win!";
    }
     else if (playerSelection == "rock" && computerSelection == "siccors"){
        return "Player win!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "Player win!";
    }
     else if (playerSelection == "paper" && computerSelection == "siccors"){
        return "Computer win!";
    }
     
    else if (playerSelection == "siccors" && computerSelection == "rock"){
        return "Computer win!";
    }
     else if (playerSelection == "siccors" && computerSelection == "paper"){
        return "Player win!";
    }
    else return "Pls enter rock, paper or siccors only";
}
 

function game(){
    
    for (let i = 0; i < 5; i++){
        let count =  playRound(playerSelection);
        if (count == 'Computer win!'){
            computerWin ++;          
            console.log("Computer has won: " + computerWin + " game so far!");
            if(computerWin == 3){
                return computerWin;
            }
            
        }
        else if (count == "Player win!"){
            playerWin++;
            console.log("Player has won: " + playerWin + " game so far!");
            if(playerWin == 3){
                return playerWin;
            }
           
        }
        else  console.log('Tie!');
    }
}

function winner(){
    game();
    if (computerWin > playerWin){
        console.log("Computer won the game!!!");
    }
    else if (playerWin > computerWin){
        console.log("Player won the game!!!");
    }
    else console.log("The game has tied!!!");
}