
export default function TicTac(symbol,ticTacGame) {

let ticTacGame = [
["o","x","x"],
["o","o","o"],
["","","x"]
]

//winner o code
if(ticTacGame[0][0]==symbol && ticTacGame[0][1]==symbol && ticTacGame[0][2]==symbol){
    console.log("winner "+symbol)
}
if(ticTacGame[1][0]==symbol && ticTacGame[1][1]==symbol && ticTacGame[1][2]==symbol){
    console.log("winner "+symbol)
}
if(ticTacGame[2][0]==symbol && ticTacGame[2][1]==symbol && ticTacGame[2][2]==symbol){
    console.log("winner "+"o")
}

if(ticTacGame[0][0]==symbol && ticTacGame[1][0]==symbol && ticTacGame[2][0]==symbol){
    console.log("winner "+symbol)
}
if(ticTacGame[0][1]==symbol && ticTacGame[1][1]==symbol && ticTacGame[2][1]==symbol){
    console.log("winner "+symbol)
}
if(ticTacGame[0][2]==symbol && ticTacGame[1][2]==symbol && ticTacGame[2][2]==symbol){
    console.log("winner "+symbol)
}

if(ticTacGame[0][0]==symbol && ticTacGame[1][1]==symbol && ticTacGame[2][2]==symbol){
    console.log("winner "+symbol)
}
if(ticTacGame[0][2]==symbol && ticTacGame[1][1]==symbol && ticTacGame[2][0]==symbol){
    console.log("winner "+symbol)
}


// let x = ""
// let o = "3"

//     if(x>=3){
// console.log("winner "+"x")
//     }
// if(o>=3){
// console.log("winner "+"o")}
   

    

}