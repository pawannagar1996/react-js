
export default function TicTac() {

let ticTacGame = [
["x","o",""],
["x","o",""],
["x","","o"]
]

// winner o code
if(ticTacGame[0][0]=="o" && ticTacGame[0][1]=="o" && ticTacGame[0][2]=="o"){
    console.log("winner "+"o")
}
if(ticTacGame[1][0]=="o" && ticTacGame[1][1]=="o" && ticTacGame[1][2]=="o"){
    console.log("winner "+"o")
}
if(ticTacGame[2][0]=="o" && ticTacGame[2][1]=="o" && ticTacGame[2][2]=="o"){
    console.log("winner "+"o")
}

if(ticTacGame[0][0]=="o" && ticTacGame[1][0]=="o" && ticTacGame[2][0]=="o"){
    console.log("winner "+"o")
}
if(ticTacGame[0][1]=="o" && ticTacGame[1][1]=="o" && ticTacGame[2][1]=="o"){
    console.log("winner "+"o")
}
if(ticTacGame[0][2]=="o" && ticTacGame[1][2]=="o" && ticTacGame[2][2]=="o"){
    console.log("winner "+"o")
}

if(ticTacGame[0][0]=="o" && ticTacGame[1][1]=="o" && ticTacGame[2][2]=="o"){
    console.log("winner "+"o")
}
if(ticTacGame[0][2]=="o" && ticTacGame[1][1]=="o" && ticTacGame[2][0]=="o"){
    console.log("winner "+"o")
}


// winner x code
if(ticTacGame[0][0]=="x" && ticTacGame[0][1]=="x" && ticTacGame[0][2]=="x"){
    console.log("winner "+"x")
}
if(ticTacGame[1][0]=="x" && ticTacGame[1][1]=="x" && ticTacGame[1][2]=="x"){
    console.log("winner "+"x")
}
if(ticTacGame[2][0]=="x" && ticTacGame[2][1]=="x" && ticTacGame[2][2]=="x"){
    console.log("winner "+"x")
}

if(ticTacGame[0][0]=="x" && ticTacGame[1][0]=="x" && ticTacGame[2][0]=="x"){
    console.log("winner "+"x")
}
if(ticTacGame[0][1]=="x" && ticTacGame[1][1]=="x" && ticTacGame[2][1]=="x"){
    console.log("winner "+"x")
}
if(ticTacGame[0][2]=="x" && ticTacGame[1][2]=="x" && ticTacGame[2][2]=="x"){
    console.log("winner "+"x")
}

if(ticTacGame[0][0]=="x" && ticTacGame[1][1]=="x" && ticTacGame[2][2]=="x"){
    console.log("winner "+"x")
}
if(ticTacGame[0][2]=="x" && ticTacGame[1][1]=="x" && ticTacGame[2][0]=="x"){
    console.log("winner "+"x")
}

// let x = ""
// let o = "3"

//     if(x>=3){
// console.log("winner "+"x")
//     }
// if(o>=3){
// console.log("winner "+"o")}
   

    
    


return(<div></div>
)
}