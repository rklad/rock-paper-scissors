let userScore = 0;
let compScore = 0;

//GETTING USERNAME
  let username = prompt("Enter your username:");
  let names = `${username}`
  document.getElementById("username1").innerText = `Welcome  ${names} to Kendrick, Drake, Cole, a HipHop version of Rock Paper Scissors! Select one of Kendrick Lamar, Drake, or J Cole and try to beat the computer in a best-of-5! 
  
  Kendrick beats Drake, Drake beats Cole, and Cole beats Kendrick. Good Luck!`;
  document.getElementById("username2").innerText = `${names}'s choice`;
  document.getElementById("username3").innerText = `${names}`;

// THE ENTIRE FUNCTION
function playGame(userChoice) {
  //COMP CHOICE
  let compChoice = getComputerChoice()
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "Kendrick";
        break;
      case 1:
        return "Drake";
        break;
      case 2:
        return "Cole";
        break;
    } 

    
  }

  // get user's choice
  // WHEN USER CHOOSES KENDRICK & COMP CHOOSES DRAKE
if (userChoice === 'Kendrick' && compChoice === 'Drake') {
  updateUserScore();
  document.getElementById('user').src = 'imgs/kendrick.webp'; 
  document.getElementById('comp').src = 'imgs/drake3.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/kendrick4.jpg';
  document.getElementById('smallcomp').src = 'imgs/drake4.png' ;

  document.getElementById('decider').innerHTML = `${names} chose ${userChoice}, Computer chose ${compChoice}, ${names} wins!`
} 

// WHEN USER CHOOSES KENDRICK & COMP CHOOSES COLE
  else if (userChoice === 'Kendrick' && compChoice === 'Cole') {
  updateCompScore();
  document.getElementById('user').src = 'imgs/kendrick.webp'; 
  document.getElementById('comp').src = 'imgs/cole3.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/kendrick4.jpg';
  document.getElementById('smallcomp').src = 'imgs/cole4.jpg';

  document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, Computer wins :(`
} 

  // WHEN USER CHOOSES KENDRICK & COMP CHOOSES KENDRICK
  else if (userChoice === 'Kendrick' && compChoice === 'Kendrick') {
  document.getElementById('user').src = 'imgs/kendrick.webp'; 
  document.getElementById('comp').src = 'imgs/kendrick.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/kendrick4.jpg';
  document.getElementById('smallcomp').src = 'imgs/kendrick4.jpg';

  document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, it's a Tie!`
} 

  // WHEN USER CHOOSES DRAKE & COMP CHOOSES DRAKE
  else if (userChoice === 'Drake' && compChoice === 'Drake') {
  document.getElementById('user').src = 'imgs/drake3.webp'; 
  document.getElementById('comp').src = 'imgs/drake3.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/drake4.png';
  document.getElementById('smallcomp').src = 'imgs/drake4.png';

  document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, it's a Tie!`
} 

  // WHEN USER CHOOSES DRAKE AND COMP CHOOSES KENDRICK
  else if (userChoice === 'Drake' && compChoice === 'Kendrick') {
  updateCompScore();  
  document.getElementById('user').src = 'imgs/drake3.webp'; 
  document.getElementById('comp').src = 'imgs/kendrick.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/drake4.png';
  document.getElementById('smallcomp').src = 'imgs/kendrick4.jpg';

  document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, Computer wins :(`
} 

  // WHEN USER CHOOSES DRAKE AND COMP CHOOSES COLE
  else if (userChoice === 'Drake' && compChoice === 'Cole') {
  updateUserScore();
  document.getElementById('user').src = 'imgs/drake3.webp'; 
  document.getElementById('comp').src = 'imgs/cole3.webp';
  //FOR SMALL IMGS
  document.getElementById('smalluser').src = 'imgs/drake4.png';
  document.getElementById('smallcomp').src = 'imgs/cole4.jpg';

  document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, ${username} wins!`
} 

  // WHEN USER CHOOSES COLE AND COMP CHOOSES COLE 
  else if (userChoice === 'Cole' && compChoice === 'Cole') {
    document.getElementById('user').src = 'imgs/cole3.webp'; 
    document.getElementById('comp').src = 'imgs/cole3.webp';
    //FOR SMALL IMGS
    document.getElementById('smalluser').src = 'imgs/cole4.jpg';
    document.getElementById('smallcomp').src = 'imgs/cole4.jpg';

    document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, it's a Tie!`
}

  // WHEN USER CHOOSES COLE AND COMP CHOOSES KENDRICK
  else if (userChoice === 'Cole' && compChoice === 'Kendrick') {
    updateUserScore()
    document.getElementById('user').src = 'imgs/cole3.webp'; 
    document.getElementById('comp').src = 'imgs/kendrick.webp';
    //FOR SMALL IMGS
    document.getElementById('smalluser').src = 'imgs/cole4.jpg';
    document.getElementById('smallcomp').src = 'imgs/kendrick4.jpg';

    document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, ${username} wins!`
  }

  // WHEN USER CHOOSES COLE AND COMP CHOOSES DRAKE 
  else if (userChoice === 'Cole' && compChoice === 'Drake') {
    updateCompScore();
    document.getElementById('user').src = 'imgs/cole3.webp'; 
    document.getElementById('comp').src = 'imgs/drake3.webp';
    //FOR SMALL IMGS
    document.getElementById('smalluser').src = 'imgs/cole4.jpg';
    document.getElementById('smallcomp').src = 'imgs/drake4.png';

    document.getElementById('decider').innerText = `${names} chose ${userChoice}, Computer chose ${compChoice}, Computer wins :(`
  }


  //DETERMINING USER SCORE 
  function updateUserScore() {
    userScore++;
    document.getElementById('userScoreboard').innerText = userScore;
  }
  //DETERMINING COMP SCORE
  function updateCompScore() {
    compScore++;
    let compScoreString = compScore.toString();
    document.getElementById('compScoreboard').innerText = compScore;
  }
}


