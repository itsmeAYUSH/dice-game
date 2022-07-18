var randomNumber1 = Math.floor(6*Math.random()+1);
var randomDiceimage = "images/dice"+ randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceimage);

var randomNumber2 = Math.floor(6*Math.random()+1);
var randomDiceimage2 = "images/dice"+ randomNumber2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceimage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 player 1 won";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 won 🚩";
}else{
    document.querySelector("h1").innerHTML = "draw";

}