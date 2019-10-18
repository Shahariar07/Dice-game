var randomNumber1=Math.random()*6;          //generate random 1-6
randomNumber1=Math.floor(randomNumber1+1);

//first dice
var randomDiceImage=("dice" + randomNumber1 +".png");   //generate dice1 - dice6
var randomImageSource=("images/"+randomDiceImage);      //generate images/dice1 - images/dice6
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Secoend dice
var randomNumber2=Math.random()*6;          //generate random 1-6
randomNumber2=Math.floor(randomNumber2+1);

var randomDiceImage=("dice" + randomNumber2 + ".png");
var randomImageSource=("images/" + randomDiceImage);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

//winner condition
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 win";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 win";
}
else{
  document.querySelector("h1").innerHTML="Its a draw";
}
