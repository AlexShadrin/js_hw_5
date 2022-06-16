const body = document.body;
body.insertAdjacentHTML('afterbegin', '');

const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
const numbers = ['', 8, 7, 6, 5, 4, 3, 2, 1, ''];

function createChessBoard() {
    let table = document.createElement('table');

    for (let row = 0; row < 10; row++) {
        let tr = document.createElement('tr');
        table.append(tr);

        for (let col = 0; col < numbers.length; col++) {
            let td = document.createElement('td');
            td.style.width = "50px";
            td.style.height = "50px";
            td.style.textAlign = "center";

            if (row == 0 || row == 9) {
                td.innerHTML = letters[col];
            }
            else if (col == 0 || col == 9) {
                td.innerHTML = numbers[row];
            }
            else {
                if ((row + col) % 2 == 1) {
                    td.style.backgroundColor = "#000000";
                }
            }
            tr.append(td);
        }
    }
    body.querySelector('.chessBoard').append(table);
}

createChessBoard();