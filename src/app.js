
var userScore = 0;
var compScore = 0;

const elUserScore = document.getElementById('userScore');
const elCompScore = document.getElementById('compScore');
const elUserPick = document.getElementById('userPick');
const elCompPick = document.getElementById('compPick');
const elOverallResult = document.getElementById('overallResult');

var getResult = function(choice1, choice2) {
    if(choice1 === "rock" && choice2 === "paper"){
        compScore++;
        return "paper wins"
    }else if(choice1 === "rock" && choice2 === "scissors"){
        userScore++;
        return "rock wins"
    }else if (choice1 === "paper" && choice2 === "rock"){
        userScore++;
        return "paper wins"
    }else if(choice1 === "scissors" && choice2 === "paper"){
        userScore++;
        return "scissors wins"
    }else if(choice1 === "scissors" && choice2 === "rock"){
        compScore++;
        return "rock wins"
    }else if(choice1 === "paper" && choice2 === "scissors"){
        compScore++;
        return "scissors win"
    }else {
        return "The result is a tie!"
    }
}
var showResult = function(userChoice){
    var computerChoice = computerRoll()
    var overallResult = getResult(userChoice, computerChoice)
    elUserPick.textContent = userChoice
    elCompPick.textContent = computerChoice
    elUserScore.textContent = userScore
    elCompScore.textContent = compScore
    elOverallResult.textContent = overallResult
}

var computerRoll = function() {
    var computerChoice = Math.floor(Math.random()*3 +1 );
    if (computerChoice === 1) {
        var computerChoice = "rock";
    } else if(computerChoice === 2) {
        var computerChoice = "paper";
    } else {
        var computerChoice = "scissors";
    }
    return computerChoice;
};


document.getElementById('rock').addEventListener('click', function() {
    showResult("rock")
});
document.getElementById('paper').addEventListener('click', function() {
    showResult("paper")
});
document.getElementById('scissors').addEventListener('click', function() {
    showResult("scissors")
});