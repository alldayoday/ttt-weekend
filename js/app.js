/*-------------------------------- Constants --------------------------------*/
const playerOne = "X"
const playerTwo = -"0"

const winningCombos = []

/*---------------------------- Variables (state) ----------------------------*/
let turn,
board, 
isWinner


/*------------------------ Cached Element References ------------------------*/
let s0 = document.querySelector("#sq0")
let s1 = document.querySelector("#sq1")
let s2 = document.querySelector("#sq2")
let s3 = document.querySelector("#sq3")
let s4 = document.querySelector("#sq4")
let s5 = document.querySelector("#sq5")
let s6 = document.querySelector("#sq6")
let s7 = document.querySelector("#sq7")
let s8 = document.querySelector("#sq8")

const brd = document.querySelectorAll("section > div")

const replayBtn = document.querySelector("#playAgain")

const gameStatus = document.querySelector("#message")



/*----------------------------- Event Listeners -----------------------------*/
// brd.addEventListener('click', handleClick)
// s0.addEventListener('click', handleClickZero)
// s1.addEventListener('click', handleClickOne)
// s2.addEventListener('click', handleClickTwo)
// s3.addEventListener('click', handleClickThree)
// s4.addEventListener('click', handleClickFour)
// s5.addEventListener('click', handleClickFive)
// s6.addEventListener('click', handleClickSix)
// s7.addEventListener('click', handleClickSeven)
// s8.addEventListener('click', handleClickEight)


replayBtn.addEventListener('click', replay)


/*-------------------------------- Functions --------------------------------*/
init ()

// s0 = null
// s1 = null
// s2 = null
// s3 = null
// s4 = null
// s5 = null
// s6 = null
// s7 = null
// s8 = null



console.log(turn)

function init(){
	board = [null,null,null,null,null,null,null,null]
	turn = 1
	gameStatus.textContent = "Player X's Turn"
	isWinner = null
	// render()
}

console.log(board)

render()
function render() {
  board.forEach((function check(sq,idx){
    let sqVal
    if (sq === 1) {
      sqVal = 'X'
    } else if (sq === -1) {
      sqVal= 'O'
    } else if (sq === null) {
      sqVal = ""
    }
	brd[idx].innerText = sqVal
  }));
	if (!isWinner) {
		message.innerText = `It is ${turn === 1 ? "X" : "O"}'s turn!`
	} else if (winner === "T") {
		message.innerText = `Tie Game! Play again to find a winner`
	} else {
		message.innerText = `${playerName === 1 ? "X" : "O"} is the winner!`
	}
  }



	
function replay(){
	console.log('also')
}





function playerName(){
	if(playerTurn === 1){
		return 'Player X'
	} else if (playerTurn === -1) {
		return 'Player O'
	}
}

// function handleClickZero(){
// 	if (playerTurn = 1) {
// 	sq0.textContent = "X"
// 	board[0] = 1} else{
// 		sq0.textContent = "O"
// 		board[0] = -1
// 	}
// 		playerTurn * -1
// 	}
// 	function handleClickOne(){
// 		if (playerTurn = 1) {
// 		sq1.textContent = "X"
// 		board[1] = 1} else{
// 			sq1.textContent = "O"
// 			board[1] = -1
// 		}
// 		console.log(board)
// 		}
// 		function handleClickTwo(){
// 			if (playerTurn = 1) {
// 			sq2.textContent = "X"
// 			board[2] = 1} else{
// 				sq0.textContent = "O"
// 				board[2] = -1
// 			}
// 			console.log(board)
// 			}
// 			function handleClickThree(){
// 				if (playerTurn = 1) {
// 				sq3.textContent = "X"
// 				board[3] = 1} else{
// 					sq0.textContent = "O"
// 					board[3] = -1
// 				}
// 				console.log(board)
// 				}
// 				function handleClickFour(){
// 					if (playerTurn = 1) {
// 					sq4.textContent = "X"
// 					board[4] = 1} else{
// 						sq0.textContent = "O"
// 						board[4] = -1
// 					}
// 					console.log(board)
// 					}
// 					function handleClickFive(){
// 						if (playerTurn = 1) {
// 						sq5.textContent = "X"
// 						board[5] = 1} else{
// 							sq0.textContent = "O"
// 							board[5] = -1
// 						}
// 						console.log(board)
// 						}
// 						function handleClickSix(){
// 							if (playerTurn = 1) {
// 							sq6.textContent = "X"
// 							board[6] = 1} else{
// 								sq0.textContent = "O"
// 								board[6] = -1
// 							}
// 							console.log(board)
// 							}
// 							function handleClickSeven(){
// 								if (playerTurn = 1) {
// 								sq7.textContent = "X"
// 								board[7] = 1} else{
// 									sq0.textContent = "O"
// 									board[7] = -1
// 								}
// 								console.log(board)
// 								}
// 								function handleClickEight(){
// 									if (playerTurn = 1) {
// 									sq8.textContent = "X"
// 									board[8] = 1} else{
// 										sq0.textContent = "O"
// 										board[8] = -1
// 									}
// 									console.log(board)
// 									}

