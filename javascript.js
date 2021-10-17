console.log("welcome and play Tic Tac Toe");
let ting = new Audio('resources/ting.mp3');
let gamesound = new Audio('resources/music.mp3');
let gameOverSound = new Audio('resources/gameover.mp3');
let turn = "X";
let isgameover = false;
const changeturn = ()=> 
{
    return  turn === "X" ?  "O" :  "X";
}
function eachBoxFull(){
    let boxtext = document.getElementsByClassName("text");
    let count = 0 ;
    Array.from(boxtext).forEach(element => {
        if(element.innerText === "") 
        {
           count++;
        }
    })
    if(count>=1) {return true;}
    else {return false;}
}
function checkWin(){
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6], 
        [1,4,7],
        [2,5,8], 
        [0,4,8], 
        [2,4,6],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}
let boxes =document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeturn();
            ting.play();
            if(eachBoxFull())
                {
                    let text = document.getElementById('turntext');
                    text.innerText = "The Game is a Draw"
                }
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("turn")[0].innerText = "Turn of : "  + turn;
            }
            else
            {
                gameOverSound.play();
            }
        }
    })
})
let reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll('.text');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    // document.querySelectorAll()
    document.getElementsByClassName("turn")[0].innerText = "Turn of : " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})