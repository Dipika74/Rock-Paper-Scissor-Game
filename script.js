let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    let options= ["rock", "paper", "scissors"];
    const randmIdx = Math.floor(Math.random()*3);
    return options[randmIdx];
};    

const drawGame = () => {
    msg.style.backgroundColor = "yellow";
    msg.innerText = "Game is Draw!";
};

const showWinner = (userWin) => {
    if(userWin) {
       msg.innerText = "You Win!";
       msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    };

};

const playGame = (userChoice) => {
    console.log("Your Choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer's Choice is", compChoice);
    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin= compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});