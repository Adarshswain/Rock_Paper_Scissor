const buttons = document.querySelectorAll("button");
console.log(buttons);
const result = document.querySelector('#result');
const  userscore = document.querySelector('#user-score');
const computerscore = document.querySelector('#computer-score')

let userScore = 0;
let computerScore = 0;
//computer choice
const computerChoice = () =>{
    const choice = ['rock','paper','scissors'];

    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}


//event listener
buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        const res = compareHands(button.id,computerChoice());
        result.innerHTML = res;
    })
})


//comapre  hands
const compareHands = (playerChoice, computerChoice) =>{
    if(playerChoice == computerChoice){
        return 'It is a tie';

    }
    else if((playerChoice == 'rock' && computerChoice == 'scissors') || 
    (playerChoice == 'paper' && computerChoice == 'rock') ||
     (playerChoice == 'scissors' && computerChoice == 'paper'))
     {
           userScore++;
           userscore.innerHTML = userScore;
           return 'You win' +" "+ userScore + " " +"beats" + " "+ computerScore;  
           }

           else
           {
            computerScore++;
            computerscore.innerHTML = computerScore;
            return  'you Lose'+" " + computerScore +" " + "beats" + " " + userScore;

           }
}