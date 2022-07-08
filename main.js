let player = "X";
let gameOver = false;
let count = 0;

const changePlayer = () => {
    return player === "X" ? "0" : "X";
};

const checkWon = () => {
    let boxTexts = document.getElementsByClassName("boxText");
    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    winPos.forEach(ele => {
        if(boxTexts[ele[0]].innerText === boxTexts[ele[1]].innerText &&
             boxTexts[ele[1]].innerText === boxTexts[ele[2]].innerText && 
              boxTexts[ele[0]].innerText !== ""){
                document.getElementById("result").innerText = "Player " +
                   boxTexts[ele[0]].innerText + " Won !!" ;
                 //  console.log("hi " + boxTexts[ele[0]].innerText);
                   document.getElementsByClassName("turnInfo")[0].innerText = "Congratulations player ";
                   document.getElementsByClassName("player")[0].innerText ="" + boxTexts[ele[1]].innerText;
                   gameOver = true;
                   count=0;//
              }
    })
};

let boxes = document.getElementsByClassName("box"); //fetch the elements of box, as objects which look like an array

Array.from(boxes).forEach((box) => { //converting the objects fetched into a real array for further manipulation
    let boxText = box.querySelector(".boxText");

    box.addEventListener("click", () => {
        if(boxText.innerText === "" && !gameOver){
            boxText.innerText = player;
            player=changePlayer();
            checkWon();
            count++;
            if(!gameOver){
                document.getElementsByClassName("player")[0].innerText = player;
            }
           // console.log(count);
           if(!gameOver && count===9){
            document.getElementById("result").innerText = "Match Draw, No one Wins !!";
            document.getElementsByClassName("turnInfo")[0].innerText = "";
            document.getElementsByClassName("player")[0].innerText = "";
            count = 0;
           }
        }
    });
});

let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () =>{
    let boxTexts = document.querySelectorAll(".boxText");
    boxTexts.forEach(boxText => {
        boxText.innerText = "";
    });
    
    document.getElementById("result").innerText = "Game is in progress";
    player = "X";
    document.getElementsByClassName("turnInfo")[0].innerText = "It's the turn of player ";
    document.getElementsByClassName("player")[0].innerText = player;
    count=0;//
    gameOver= false;
}); 























