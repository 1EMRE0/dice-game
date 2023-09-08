


var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomDice = "image/dice" + randomNumber + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDice);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2 = "image/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDice2);


if(randomNumber>randomNumber2){

    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}

else {
    Document.querySelector("h1").innerHTML ="Draw";
}