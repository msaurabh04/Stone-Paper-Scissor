let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genComputerChoice = ()=>{
   // rock , paper , scissors
   const options = ['rock','paper','scissors'];
   const randIdx=Math.floor(Math.random() *3);
   return options[randIdx];
};

const drawgame = () =>{
   // console.log("game was draw.");
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor='#081b31';

}
 const showWinner = (userWin  , userChoice, compChoice) =>{
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
   // console.log("you win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor='green';

   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
    //console.log("You lose");
    msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor='red';
   }
 };
const playGame = (userChoice) =>{
    //console.log("user choice =",userChoice);
    //generte computer choice

    const compChoice = genComputerChoice();
   // console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawgame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){

            //rock, scissore
            userWin= compChoice === "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice ,compChoice);
    }
};



choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
      playGame(userchoice);
    });
});