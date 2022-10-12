let num1 = Math.floor(Math.random() * 6 + 1);
let num2 = Math.floor(Math.random() * 6 + 1);

let image1 = document.getElementById("i1");
let image2 = document.getElementById("i2");

image1.setAttribute("src", "images/dice" + num1 + ".png");
image2.setAttribute("src", "images/dice" + num2 + ".png");

if(num1 > num2){
    document.getElementById("h1").innerHTML = "Player 1 win";
}
else if(num1 < num2){
    document.getElementById("h1").innerHTML = "Player 2 win";
}
else{
    document.getElementById("h1").innerHTML = "draw";
}

// switch (num1) {
//     case 1:
//         image1.setAttribute("src", "images/dice1.png");
//         break;

//     case 2:
//         image1.setAttribute("src", "images/dice2.png");
//         break;

//     case 3:
//         image1.setAttribute("src", "images/dice3.png");
//         break;

//     case 4:
//         image1.setAttribute("src", "images/dice4.png");
//         break;

//     case 5:
//         image1.setAttribute("src", "images/dice5.png");
//         break;

//     case 6:
//         image1.setAttribute("src", "images/dice6.png");
//         break;
// }

// switch (num2) {
//     case 1:
//         image2.setAttribute("src", "images/dice1.png");
//         break;

//     case 2:
//         image2.setAttribute("src", "images/dice2.png");
//         break;

//     case 3:
//         image2.setAttribute("src", "images/dice3.png");
//         break;

//     case 4:
//         image2.setAttribute("src", "images/dice4.png");
//         break;

//     case 5:
//         image2.setAttribute("src", "images/dice5.png");
//         break;

//     case 6:
//         image2.setAttribute("src", "images/dice6.png");
//         break;
// }


