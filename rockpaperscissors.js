const valid = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let compScore = 0;
let result = document.getElementById('result');
let hidden = document.getElementsByClassName('playagain');
    
    function firstLetterCap(word){
        let first_letter = word.charAt(0)
        let rest = word.slice(1).toLowerCase();
        let new_word = first_letter.toUpperCase() + rest
        return first_letter.toUpperCase() + rest;
    }
    function computerPlay(){
        let num = Math.floor(Math.random()*3);
        let rps_arr = ['ROCK', 'PAPER', 'SCISSORS'];
        return rps_arr[num];
    }
    let buttons = document.querySelectorAll('button');

    function playRound(playerSelection, computerSelection){
        console.log(`Your move: ${firstLetterCap(playerSelection)}`)
        console.log(`Computer's move: ${firstLetterCap(computerSelection)}`)
        if(playerSelection.toUpperCase()===computerSelection){
            return 'A tie!'
        }
        if(playerSelection.toUpperCase()==='SCISSORS'){
            if(computerSelection === 'PAPER'){
                return `You win! ${firstLetterCap(playerSelection)} beats ${firstLetterCap(computerSelection)}.`
            }else{
                return `You lose! ${firstLetterCap(computerSelection)} beats ${firstLetterCap(playerSelection)}.`
            }
        }else if(playerSelection.toUpperCase()==='ROCK'){
            if(computerSelection === 'SCISSORS'){
                return `You win! ${firstLetterCap(playerSelection)} beats ${firstLetterCap(computerSelection)}.`
            }else{
                return `You lose! ${firstLetterCap(computerSelection)} beats ${firstLetterCap(playerSelection)}.`
            }
        }else if(playerSelection.toUpperCase()==='PAPER'){
            if(computerSelection === 'ROCK'){
                return `You win! ${firstLetterCap(playerSelection)} beats ${firstLetterCap(computerSelection)}.`
            }else{
                return `You lose! ${firstLetterCap(computerSelection)} beats ${firstLetterCap(playerSelection)}.`
            }
        }
    }
buttons.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        let computerSelection = computerPlay();
        let playerSelection = e.target.className;
        let gameResult = playRound(playerSelection,computerSelection);
        if (gameResult.includes('win')){
            playerScore++;
            console.log(`uwin ${playerScore}`);
        }else if(gameResult.includes('lose')){
            
            compScore++;
            console.log(`ulose ${compScore}`);
        }else{
            //A tie. Do nothing to the scores.
        }
        updateResult(playerSelection, firstLetterCap(computerSelection));

        if(playerScore===5 || compScore===5){
            if(playerScore>compScore){
                result.textContent =`Congratulations, you won!`
                result.style.color = 'green';
            }else if(playerScore<compScore){
                result.textContent=`You lost!`;
                result.style.color = 'red';
            }
            buttons.forEach((button)=>{
                button.setAttribute('disabled', 'disabled');
            });
            hidden[0].classList.toggle('hidden');
            
        }

    });
});
hidden[0].addEventListener("click", ()=>{
    playerScore = 0;
    compScore = 0;
    updateResult();
    buttons.forEach((button) =>{
        button.removeAttribute('disabled');
    })
    result.textContent='';
    hidden[0].classList.toggle('hidden');
})
    let pChoice = document.getElementById('pChoice');
    let cChoice = document.getElementById('cChoice');
    let playerSpan = document.getElementById('playerScore');
    let compSpan = document.getElementById('compScore');
    function updateResult(pc, cc){
        playerSpan.textContent = playerScore;
        compSpan.textContent = compScore;
        pChoice.textContent = pc;
        cChoice.textContent = cc;


    }
    function game(){
        const valid = ['ROCK', 'PAPER', 'SCISSORS']
        const num_games = 5
        let playerScore = 0
        let compScore = 0
        let playerSelection;
        for(let i=0; i<num_games; i++){
            console.log(`Round #${i+1}`)
            let computerSelection = computerPlay();
            while(true){
                playerSelection = prompt('Rock, Paper, or Scissors?')
                playerSelection = playerSelection.toUpperCase();
                console.log(playerSelection);
                if (valid.includes(playerSelection)){
                    break;
                }   
                alert('Invalid selection. Try again.')
            }
            let result = playRound(playerSelection, computerSelection)
            if (result.includes('win')){
                playerScore++;
            }else if(result.includes('lose')){
                compScore++;
            }else{
                
            }
            console.log(result)
            console.log(`Player: ${playerScore} Computer: ${compScore}`)
            console.log('--------------------------')

        }
        console.log('Game over...')
        if(playerScore>compScore){
            console.log(`Congratulations! You won with a score of ${playerScore}/${num_games}`)
        }else if(playerScore<compScore){
            console.log(`You lost! The computer won with a score of ${compScore}/${num_games}`)
        }else{
            console.log(`You and the computer tied!`)
            console.log(`Your score: ${compScore}/${num_games}`)
            console.log(`Computer score: ${compScore}/${num_games}`)
        }
    }
    updateResult()