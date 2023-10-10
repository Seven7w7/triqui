// const options =  document.querySelectorAll('div')
// console.log(options);



// let shift = 0;
// const board  = [];
// window.addEventListener('DOMContentLoaded', pressbutton);



// function pressbutton(){
//     options.forEach((item,idx))=>
//     item.addEventListener("clik", (event)=> console.log(event,target))
// };

// function pressedButton(event,pos){
//     let x ="x";
//     let o ="o";
//     let currentBtn = event.target;
//     if (shift % 2=== 0){
//         currentBtn.style.backgroundcolor = "#008000";
//         currentBtn.textContet = x;
//         board[pos] = x;
//         shift++;
//      } else {

//     currentBtn.style.backgroundcolor = "#0d58e4";
//     currentBtn.textContet = o;
//     board[pos] = o;
//     shift++;
// }
// validateGame() !== false 
// ? swal. fire({
//     title: 'Ganador: '+event.target.textcontent,
//     widh:400,
//     padding: '3rem',
//     color: '#716dd'
// })
// :null
// }

// function validateGame() {
    
// }

document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(event) {
        const cellIndex = event.target.id;

        if (gameBoard[cellIndex] === '' && gameActive) {
            gameBoard[cellIndex] = currentPlayer;
            event.target.textContent = currentPlayer;

            if (checkWinner()) {
                Swal.fire({
                    title: `¡Jugador ${currentPlayer} ha ganado!`,
                    icon: 'success',
                    confirmButtonText: 'Volver a jugar'
                }).then(() => resetGame());
            } else if (isBoardFull()) {
                Swal.fire({
                    title: '¡Empate! El juego ha terminado.',
                    icon: 'info',
                    confirmButtonText: 'Volver a jugar'
                }).then(() => resetGame());
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
            [0, 4, 8], [2, 4, 6]             // diagonales
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }

    function isBoardFull() {
        return gameBoard.every(cell => cell !== '');
    }

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        cells.forEach(cell => {
            cell.textContent = '';
        });
        gameActive = true;
        currentPlayer = 'X';
    }
});
