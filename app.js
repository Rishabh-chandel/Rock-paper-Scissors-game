let userscr = 0;
let compscr = 0;
let message = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let usrscore = document.querySelector("#user-score");
let cmpscore = document.querySelector("#comp-score");

const compChoice = () => {
    const option = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    message.innerText = "Game was draw. Play again!";
    message.style.backgroundColor = "#E4C087";
}

const showWinner = (userWin,userChoice,compCh) => {
    if(userWin)
    {
        userscr++;
        usrscore.innerText = userscr;
        console.log("You win :)");
        message.innerText = `You win :) Your ${userChoice} beats ${compCh}`;
        message.style.backgroundColor = "#BC7C7C";
    }
    else {
        compscr++;
        cmpscore.innerText = compscr;
        console.log("You loose :(");
        message.innerText = `You loose :( ${compCh} beats Your ${userChoice}`;
        message.style.backgroundColor = "#AB886D";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compCh = compChoice();
    console.log("computer choice = ",compCh);
    if(userChoice == compCh)
    {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice == "rock")
        {
            userWin = compCh == "paper" ? false : true ;
        }
        else if(userChoice == "paper")
        {
            userWin = compCh == "scissors" ? false : true;
        }
        else {
            userWin = compCh == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compCh);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
