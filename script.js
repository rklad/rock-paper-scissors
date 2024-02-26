Window.onload = changeUsername();

function changeUsername(element) { 
    var username = prompt('Enter your username:');
    document.getElementById('username1').innerText = 'Welcome ' + username + ' to Kendrick, Drake, Cole, a HipHop version of Rock Paper Scissors! Select one of Kendrick Lamar, Drake, or J Cole and try to beat the computer in a best-of-5! Good Luck!'
    document.getElementById('username2').innerText =  username + '\'s choice'
    document.getElementById('username3').innerText = username;
// add a 'please enter your name' for null
}

function playRound() { // get user's choice
 
document.getElementById('kendrick').src='https://picsum.photos/id/237/500/300'
 document.getElementById('drake').src='https://picsum.photos/seed/picsum/500/300'
 document.getElementById('cole').src='https://picsum.photos/500/300?grayscale'

// need to display user choice
}

function getComputerChoice() { //getting computer's choice
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'kendrick'
        case 1:
            return 'drake'
        case 2:
            return 'cole'
    }

    //need to display computer choice
}

