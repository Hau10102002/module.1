const BOARD_SIZE = 15; // kích thước bàn cờ
const PLAYER_1 = 'X'; // biểu tượng của người chơi 1
const PLAYER_2 = 'O'; // biểu tượng của người chơi 2

let currentPlayer = PLAYER_1; // người chơi hiện tại
let gameOver = false; // trạng thái kết thúc game
let board = []; // mảng lưu trạng thái của bàn cờ

// tạo bàn cờ
function createBoard() {
    let table = document.getElementById('caro-board');
    for (let i = 0; i < BOARD_SIZE; i++) {
        let row = table.insertRow();
        let rowArray = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            let cell = row.insertCell();
            cell.addEventListener('click', function() {
                if (!gameOver && !board[i][j]) {
                    cell.innerHTML = currentPlayer;
                    board[i][j] = currentPlayer;
                    checkWin(i, j);
                    currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
                }
            });
            rowArray.push('');
        }
        board.push(rowArray);
    }
}

// kiểm tra kết thúc game
function checkWin(row, col) {
    if (checkHorizontal(row) || checkVertical(col) || checkDiagonal1(row, col) || checkDiagonal2(row, col)) {
        gameOver = true;
        alert('Player ' + currentPlayer + ' win!');
    }
}

// kiểm tra hàng ngang
function checkHorizontal(row) {
    let count = 0;
    for (let j = 0; j < BOARD_SIZE; j++) {
        if (board[row][j] === currentPlayer) {
            count++;
            if (count === 5) {
                return true;
            }
        } else {
            count = 0;
        }
    }
    return false;
}

// kiểm tra hàng dọc
function checkVertical(col) {
    let count = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i][col] === currentPlayer) {
            count++;
            if (count === 5) {
                return true;
            }
        } else {
            count = 0;
        }
    }
    return false;
}

// kiểm tra đường chéo chính
function checkDiagonal1(row, col) {
    let count = 0;
    let i = row;
    let j = col;
    while (i >= 0 && j >= 0 && board[i][j] === currentPlayer) {
        count++;
        i--;
        j--;
    }
}

