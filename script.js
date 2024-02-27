Window.onload = changeUsername();

function changeUsername(element) {
  var username = prompt("Enter your username:");
  document.getElementById("username1").innerText = "Welcome " + username + " to Kendrick, Drake, Cole, a HipHop version of Rock Paper Scissors! Select one of Kendrick Lamar, Drake, or J Cole and try to beat the computer in a best-of-5! Good Luck!";
  document.getElementById("username2").innerText = username + "'s choice";
  document.getElementById("username3").innerText = username;
  // add a 'please enter your name' for null
}


function playGame(userChoice) {
  // get user's choice

// display user choice


}




// get computer choice
  function getComputerChoice() {
    //getting computer's choice
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "kendrick";
      case 1:
        return "drake";
      case 2:
        return "cole";
    }

    // display computer choice
    if (randomNumber === 'kendrick') {
        document.getElementById('image2').src = 'imgs/kendrick.webp'
    } else if (randomNumber === 'drake') {
        document.getElementById('image 2').src = 'imgs/drake3.webp'
    } else if (randomNumber === 'cole') {
        document.getElementById('image2').src = 'imgs/cole3.webp'
    }

    //need to display computer choice
  }
  // need to display user choice



