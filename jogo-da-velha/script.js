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
let changeTurn = true;

const createCells = () => {
  for (let index = 0; index < 9; index += 1) {
    const elem = document.createElement('div');
    elem.className = 'celula';
    elem.id = index;
    elem.addEventListener('click', play);
    grid.appendChild(elem);
  }
}

const play = (event) => {
  let turn = '';
  if(changeTurn){
    player.innerHTML = 'Vez do jogador O';
    turn = 'X';
  }else{
    player.innerHTML = 'Vez do jogador X';
    turn = 'O';
  }

  changeTurn = !changeTurn;

  event.target.innerHTML = turn;

  checkWinner(turn);
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
      } else {
        checkDraw();
      }
    }
  }
}

createCells();

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
  const cells = document.querySelectorAll('.celula');
  for(let cell of cells ){
    cell.innerHTML = '';
  }
})

const checkDraw = () => {
  let count = 0;

  const cells = document.querySelectorAll('.celula');
  for(let cell of cells ){

    if(cell.innerHTML !== ''){
      count += 1;
      if(count >= cells.length){
        player.innerHTML = 'Empatou!!';
      }

    }
  }
}
