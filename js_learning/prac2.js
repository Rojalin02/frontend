const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeleft = document.querySelector('#id');
const score = document.querySelector('#score');

let result = 0;
 function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole');
        })

        let randomsqaure = squares[Math.floor(Math.random()*9)];
        randomSquare.classList.add('mole');
    }
    
     function moveMole(){
        let timerId = null;
        timerId = setInterval(randomSquare, 500);
     }

     moveMole();
        randomSquare()