const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]


const grid = document.querySelector('.grid');
const player = document.getElementById('player');

const createCells = () => {
  for (let index = 0; index < 9; index += 1) {
    const elem = document.createElement('div');

    elem.className = 'celula';
    elem.id = index;
    grid.appendChild(elem);
  }
}

const checkWinner = (turnPlayer) => {
  for (let possibility of combinacoes) {
    let hits = 0;
    for (let index of possibility) {
      const value = grid.children[index].innerHTML;
      
      if (value === turnPlayer) {
        hits += 1;
      }

      if (hits >= 3) {
        player.innerHTML = `Jogador ${turnPlayer} ganhou!`;
      }
    }
  }
}

createCells();

grid.children[0].innerHTML = 'X';
grid.children[8].innerHTML = 'O';
grid.children[3].innerHTML = 'X';
grid.children[7].innerHTML = 'O';
grid.children[6].innerHTML = 'X';


checkWinner('X');