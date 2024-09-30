let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WON!! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#A5BE00"
    } else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE!! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "#C81D25"
        msg.style.color = "white"
    }
};

const playGame= (userChoice) => {
    console.log("user choice= ", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice= ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if (userChoice=== "rock") {
            userWin = compChoice === "paper" ? false:true;
        } else if (userChoice==="paper") {
            userWin= compChoice=== "scissor" ? false: true;
        } else{
            userWin = compChoice==="rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#0B3954"
    msg.style.color = "white"
}
const genCompChoice = () => {
    const options= ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})