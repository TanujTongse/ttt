let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function handleCellClick(index) {
    if (!gameActive || gameBoard[index] !== '') return;

    gameBoard[index] = currentPlayer;
    render();
    checkResult();
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}

function checkResult() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            alert(document.getElementById('result').innerText = `${currentPlayer} WINS`);
            break;
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        alert(document.getElementById('result').innerText = "<<It is a draw>>");
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('result').innerText = '';
    render();
}

function render() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.textContent = cell;
        cellElement.classList.add('cell');
        cellElement.addEventListener('click', () => handleCellClick(index));
        grid.appendChild(cellElement);
    });
}

// Initial render
render();
