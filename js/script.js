function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return '<i class="fas fa-gem"></i>';
        }
        else if (argMoveId == 2) {
            return '<i class="far fa-copy"></i>';
        }
        else if (argMoveId == 3) {
            return '<i class="fas fa-cut"></i>';
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*
    if (randomNumber == 1) {
        computerMove = '<i class="fas fa-gem"></i>';
    } else if (randomNumber == 2) {
        computerMove = '<i class="far fa-copy"></i>';
    } else if (randomNumber == 3) {
        computerMove = '<i class="fas fa-cut"></i>';
    }
    */

    printMessage('Mój ruch to: ' + computerMove);

    /*
        let playerInput = prompt('Wybierz swój ruch! 1: <i class="fas fa-gem"></i>, 2: <i class="far fa-copy"></i>, 3: <i class="fas fa-cut"></i>.');
    */

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*
    if (playerInput == '1') {
        playerMove = '<i class="fas fa-gem"></i>';
    } else if (playerInput == '2') {
        playerMove = '<i class="far fa-copy"></i>';
    } else if (playerInput == '3') {
        playerMove = '<i class="fas fa-cut"></i>';
    }
    */

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argComputerMove == '<i class="fas fa-gem"></i>' && argPlayerMove == '<i class="far fa-copy"></i>') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == '<i class="far fa-copy"></i>' && argPlayerMove == '<i class="fas fa-cut"></i>') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == '<i class="fas fa-cut"></i>' && argPlayerMove == '<i class="fas fa-gem"></i>') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == '<i class="fas fa-gem"></i>' && argPlayerMove == '<i class="fas fa-cut"></i>') {
            printMessage('Tym razem przegrywasz :(');
        } else if (argComputerMove == '<i class="far fa-copy"></i>' && argPlayerMove == '<i class="fas fa-gem"></i>') {
            printMessage('Tym razem przegrywasz :(');
        } else if (argComputerMove == '<i class="fas fa-cut"></i>' && argPlayerMove == '<i class="far fa-copy"></i>') {
            printMessage('Tym razem przegrywasz :(');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Jest remis');
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Wybrałeś niewłaściwy ruch');
        }
    }

    displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});

