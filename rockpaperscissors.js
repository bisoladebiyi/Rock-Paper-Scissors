let playerscore = 0
let computerscore = 0
const pScore = document.getElementById("playerScore")
const cScore = document.getElementById("computerScore")
const result = document.getElementById('results')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissors = document.getElementById('s')

function convertToWord (letter){
    if(letter==='r') return 'Rock'
    if(letter==='p') return 'Paper'
    return 'Scissors'
}

function getComputerMoves(){
    const moves = ['r','p','s']
    const randomMoves = Math.floor(Math.random() * 3)
    return moves[randomMoves]
}

function winner(players, computers) {
    const smallPlayerWord = 'p'.fontsize(3).sup()
    const smallComputerWord = 'c'.fontsize(3).sup()
    const glow = document.getElementById(players)
    playerscore++
    pScore.innerHTML = playerscore;
    cScore.innerHTML = computerscore;
    result.innerHTML = `${convertToWord(players)}${smallPlayerWord} beats ${convertToWord(computers)}${smallComputerWord}. You win! 🎉`
    glow.classList.add('green');
    setTimeout(() => glow.classList.remove('green'), 300)
      
}
function looser(players, computers) {
    const smallPlayerWord = 'p'.fontsize(3).sup()
    const smallComputerWord = 'c'.fontsize(3).sup()
    const glow = document.getElementById(players)
    computerscore++
    pScore.innerHTML = playerscore;
    cScore.innerHTML = computerscore;
    result.innerHTML = `${convertToWord(players)}${smallPlayerWord} loses to ${convertToWord(computers)}${smallComputerWord}. You lost 😿` 
    glow.classList.add('red');
    setTimeout(() => glow.classList.remove('red'), 300)
}
function draw(players, computers) {
    
    const smallPlayerWord = 'p'.fontsize(3).sup()
    const smallComputerWord = 'c'.fontsize(3).sup()
    const glow = document.getElementById(players)
    result.innerHTML = `${convertToWord(players)}${smallPlayerWord} equals ${convertToWord(computers)}${smallComputerWord}. It's a draw...`
    glow.classList.add('blue');
    setTimeout(() => glow.classList.remove('blue'), 300)
}


function game (playerMoves) {
   const computerMoves = getComputerMoves()
    switch(playerMoves + computerMoves) {
        case 'rs':
        case 'pr':
        case 'sp':
            winner(playerMoves, computerMoves);
            break
        case 'sr':
        case 'rp':
        case 'ps':
            looser(playerMoves, computerMoves);
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(playerMoves, computerMoves);
        break
    }
}

function main() {
    rock.addEventListener('click' , function() { game ('r') })
    paper.addEventListener('click' , function() { game ('p') } )
    scissors.addEventListener('click' , function() { game ('s') })
    

}
main();