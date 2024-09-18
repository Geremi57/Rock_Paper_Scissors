  

  let computerMove = '';
  

  let result = '';

  let humanScore = 0;
  let computerScore = 0;
  
  function theChoice(){

  function getComputerChoice(){

    const randomNumber = Math.random();

    if (randomNumber > 0 && randomNumber <=1/3 ) {
    computerMove ='Rock';
    }

    else if (randomNumber > 1/3 && randomNumber <= 2/3 ) {
    computerMove ='Paper';
    }

    else if (randomNumber > 2/3 && randomNumber <= 1 ) {
    computerMove ='Scissors';
    }
    
  }

 getComputerChoice(); 

function getHumanChoice(){
  const choices = ['rock', 'paper', 'scissors']

  
  let humanChoice = prompt('Rock, Paper or Scissors').toLowerCase();


        if (humanChoice === 'rock'  && computerMove === 'Rock'){
        result = 'Its a tie';
        }

        else if(humanChoice === 'paper'  && computerMove === 'Rock'){
        result ='You Win';
        }

        else if (humanChoice === 'scissors'  && computerMove === 'Rock'){
        result ='You Lose';
        }

        else if (humanChoice === 'rock'  && computerMove === 'Paper'){
        result ='You Lose';
        }

        else if (humanChoice === 'paper'  && computerMove === 'Paper'){
        result = 'Its a tie';
        }

        else if (humanChoice === 'scissors'  && computerMove === 'Paper'){
        result ='You Win';
        }

        else if (humanChoice === 'rock'  && computerMove === 'Scissors'){
        result ='You Win';
        }

        else if (humanChoice === 'paper'  && computerMove === 'Scissors'){
        result = 'You Lose';
        }

        else if(humanChoice === 'scissors' && computerMove === 'Scissors'){
        result ='Its a tie';
        }

        else {
          alert('Invalid input');
          theChoice();
          result = 'Invalid input';
        }


        if(result === 'You Win'){
          humanScore ++;

        }
    
        else if(result === 'You Lose'){
          computerScore ++;

        }

          
  console.log(`You picked ${humanChoice} computer picked ${computerMove} ${result}'\nYour Score: ${humanScore}\nComputer Score: ${computerScore}`);

      }

      getHumanChoice();

  }
    

    function playRound(humanChoice, computerMove) {
              
    theChoice();
    theChoice();
    theChoice();
    theChoice();
    theChoice();

    if(humanScore > computerScore){
      alert('You won this round');
    }

    else if(computerScore > humanScore){
      alert('Computer won this round');
    }

    else if(computerScore === humanScore){
      alert('Its a tie for this round');
    }
      
    }

    playRound();

            
  
  

  

  