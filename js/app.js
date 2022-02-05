/*-------------------------------- Constants --------------------------------*/

const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,6],[3,4,5],[6,7,8]]


/*---------------------------- Variables (state) ----------------------------*/
let playerTurn,
board, 
isWinner


/*------------------------ Cached Element References ------------------------*/

const brd = document.querySelectorAll("section.board > div")

const replayBtn = document.querySelector("#playAgain")

const gameStatus = document.querySelector("#message")



/*----------------------------- Event Listeners -----------------------------*/


brd.forEach((sq) => sq.addEventListener('click', handleClick))

replayBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init()


//set board to 9 nulls
//set winner to null
//set initial h2
//set initial player
//call render
function init(){
	board = [null,null,null,null,null,null,null,null,null]
	isWinner = null
	playerTurn = 1
	render()
}
//for each idx of board
//make a var for val
//if val is 1, x
//if val is -1, o
//if val is null, empty
//set that idx to val
//if there is no winner set h2 to turn
//if tie say tie
//if winner say winner

function render() {
  board.forEach((sq,idx) => {
    let sqVal
		if (sq === 1) {
			sqVal = "🐲"
    } else if (sq === -1) {
			sqVal = "👸"
    } else if (sq === null) {
      sqVal =  ""
    }
		brd[idx].textContent = sqVal
	})
	if (!isWinner) {
		gameStatus.innerText = `${playerTurn === 1 ? "🐲" : "👸"}'s Turn`
	} else if (isWinner === "T") {
		gameStatus.innerText = `A tie? There is no tie in battle, play again for victory!`
	} else {
		gameStatus.innerText = `${playerTurn === -1 ? "🐲" : "👸"} is the winner!`
	}
	}

	// find the idx clicked
	//parseint to turn into number => take the sq from the id and it becomes board array number
	//if there is something there or if winner is not null, return bc cannot play
	//otherwise set that idx to player
	//multiply by -1 to change player
	//determine if winner 
	//call render
	function handleClick(evt){
		let idx = parseInt(evt.target.id.replace("sq", "")) 
		if (board[idx] || isWinner) {
			return 
		}
		board[idx] = playerTurn
		playerTurn *= -1
		isWinner = getWin()
		render()
		}

// 	[0,1,2],[3,4,5],[6,7,8],[0,3,6],[0,4,8],[1,4,7],[2,5,6],[3,4,5],[6,7,8]]
//find absolute val of winning combos, if it is 3, return one of the winning spots
//that means whoever is in this spot is winner
//if there is a null on board, set to null to keep playing
//otherwise if no combo wins and there are no null, return tie
function getWin() {
	if (Math.abs(board[0] + board[1] + board[2]) === 3) {return board[0]}
	if (Math.abs(board[3] + board[4] + board[5]) === 3) {return board[3]}
	if (Math.abs(board[6] + board[7] + board[8]) === 3) {return board[6]}
	if (Math.abs(board[0] + board[4] + board[8]) === 3) {return board[0]}
	if (Math.abs(board[2] + board[4] + board[6]) === 3) {return board[2]}
	if (Math.abs(board[0] + board[3] + board[6]) === 3) {return board[0]}
	if (Math.abs(board[1] + board[4] + board[7]) === 3) {return board[1]}
	if (Math.abs(board[2] + board[5] + board[8]) === 3) {return board[2]}

	if (board.includes(null)) {
		return null
	} else {
		return "T"
	}
}