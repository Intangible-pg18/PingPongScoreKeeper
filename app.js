const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Vis = document.querySelector('#p1Vis');
const p2Vis = document.querySelector('#p2Vis');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click',function() {
    if(!isGameOver)
    {
        ++p1Score;
        if(p1Score === winningScore)
        { isGameOver = true;
         p1Vis.classList.add('winner');
         p2Vis.classList.add('loser');
        }
        p1Vis.textContent = p1Score;
    }
})

p2Button.addEventListener('click',function() {
    if(!isGameOver)
    {
        ++p2Score;
        if(p2Score === winningScore)
        { isGameOver = true;
         p2Vis.classList.add('winner');
         p1Vis.classList.add('loser');
        }
        p2Vis.textContent = p2Score;
    }
})

function reset (){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Vis.textContent = 0;
    p2Vis.textContent = 0;
    p1Vis.classList.remove('winner','loser');
    p2Vis.classList.remove('winner','loser');
}

winningScoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset)

