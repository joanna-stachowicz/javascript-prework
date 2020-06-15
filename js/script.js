{
    const playGame = function (playerInput) {
        clearMessages();

        const getMoveName = function (argMoveId) {
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

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        const displayResult = function (argComputerMove, argPlayerMove) {
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
}

