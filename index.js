
function rolldice(){
    var leftdice = Math.ceil(Math.random()*6 )
//console.log(leftdice)
 var result1=document.getElementById("left").src=`images/dice${leftdice}.png`



var rightdice = Math.ceil(Math.random()*6 )
//console.log( rightdice )
 var result2 = document.getElementById("right").src=`images/dice${ rightdice }.png`


 if(result1==result2){
    document.getElementById("h1").textContent="Draw"
 }
else{
    if(result1>result2){
            document.getElementById("h1").textContent="Player1 won"
    }
    else{
        document.getElementById("h1").textContent="Player2 won"
}
}

}

