let cells = document.querySelectorAll('.cell')
let winnerNote = document.querySelector('#winner')
let turn = 'X'
let winner
let counter = 0




cells.forEach(e => {
    e.addEventListener('click',function(){
        let inner = e.innerHTML
        if(!winner){
            if(!inner){
                if(turn === 'X'){
                    e.innerHTML = turn
                    turn = 'O'
                    counter++
                }else{
                    e.innerHTML = turn
                    turn = 'X'
                    counter++
                }
                if(checkWinner()==="X"||checkWinner()==="O"){
                    winner = checkWinner()
                    thereIsWinner()
                    setTimeout(reload,1000)
                }
            }
        }
        if(counter === 9){
    winnerNote.innerHTML = `It's a Draw!!`
            setTimeout(reload,1000)
        }
    }
)});






function thereIsWinner() {
    winnerNote.innerHTML = `Player ${winner} Won!!!`
}
function reload(){
    location.reload()
}
let checkWinner = function(){
    // horizontal
    for(let i=0;i<3;i++){
        if(cells[i+3].innerHTML === cells[i].innerHTML&&cells[i].innerHTML===cells[i+6].innerHTML&&cells){
            return cells[i].innerHTML
        }
    }
    // vertical
    for (let i = 0;i<7;i += 3){
        if(cells[i+1].innerHTML === cells[i].innerHTML&&cells[i].innerHTML===cells[i+2].innerHTML&&cells){
            return cells[i].innerHTML
        }
    }
    // diagonal
    if(cells[0].innerHTML === cells[4].innerHTML&&cells[4].innerHTML===cells[8].innerHTML&&cells){
        return cells[0].innerHTML
    }
    if(cells[2].innerHTML === cells[4].innerHTML&&cells[4].innerHTML===cells[6].innerHTML&&cells){
        return cells[0].innerHTML
    }
}

