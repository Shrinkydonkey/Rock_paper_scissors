let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const gen = Math.floor(Math.random() * 3);
    return options[gen];
}

const playGame= (userChoice) => {
    console.log("user choice: ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice: ", compChoice);

    // logic
    if ((userChoice === "paper" && compChoice == "rock") ||
        (userChoice === "rock" && compChoice == "scissors") ||
        (userChoice === "scissors" && compChoice == "paper")) {
            console.log("user won");
            userScore++;
            msg.innerText = `You won! Computer chose ${compChoice}`;
            msg.setAttribute("id", "won");
    }
    else if (userChoice === compChoice) {
        console.log("draw");
        msg.innerText = `You both drew Computer chose ${compChoice}`;
        msg.setAttribute("id", "draw");
    }
    else {
        console.log("comp won");
        compScore++;
        msg.innerText = `You lose! Computer chose ${compChoice}`;
        msg.setAttribute("id", "lose");
    }

    result(userScore, compScore);
}

const result = (userScore, compScore) =>{
    user.innerText = userScore;
    comp.innerText = compScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})