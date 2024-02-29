Window.onload = changeUsername();

//GETTING USERNAME
function changeUsername(element) {
  var username = prompt("Enter your username:");
  document.getElementById("username1").innerText = "Welcome " + username + " to Kendrick, Drake, Cole, a HipHop version of Rock Paper Scissors! Select one of Kendrick Lamar, Drake, or J Cole and try to beat the computer in a best-of-5! Kendrick beats Drake, Drake beats Cole, and Cole beats Kendrick. Good Luck!";
  document.getElementById("username2").innerText = username + "'s choice";
  document.getElementById("username3").innerText = username;
  // add a 'please enter your name' for null
}


function playGame(userChoice) {
  // get user's choice




  // display user choice


}




// get computer choice

let compChoice = getComputerChoice()

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "kendrick";
        break;
      case 1:
        return "drake";
        break;
      case 2:
        return "cole";
        break;
    } 

    // display computer choice
    if (compChoice === 'kendrick') {
        document.getElementById('image2').src = 'imgs/kendrick.webp'
    } else if (compChoice === 'drake') {
        document.getElementById('image2').src = 'imgs/drake3.webp'
    } else if (compChoice === 'cole') {
        document.getElementById('image2').src = 'imgs/cole3.webp'
    }

    // FOR SMALL IMGS
    if (randomNumber === 'kendrick') {
      document.getElementById('smallimage2').src = 'imgs/kendrick4.jpg'
  } else if (randomNumber === 'drake') {
      document.getElementById('smallimage2').src = 'imgs/drake4.png'
  } else if (randomNumber === 'cole') {
      document.getElementById('smallimage2').src = 'imgs/cole4.jpg'
  }

    //need to display computer choice
  }
  // need to display user choice



