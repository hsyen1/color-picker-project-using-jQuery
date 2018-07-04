var numOfSquares = 6;
var squares = $(".squares");
var pickedColor;
var gameMode = $(".gameMode");

setUpSquares();

gameMode.on("click", function() {
    if($(this).text() === "EASY") {
        numOfSquares = 3;

    } else {
        numOfSquares = 6;
    }
    gameMode.removeClass("selected");
    $(this).addClass("selected");
    reset();
});


$("#reset").on("click", function() {
   reset();
});


function generateRandomColors() {
    if(numOfSquares === 3) {
        squares.slice(0, 3).each(function(){
            $(this).css("background-color", randomColors());
        });
        squares.slice(3, 6).css("display", "none");
    } else {
        squares.each(function() {
            $(this).css("display", "block");
            $(this).css("background-color", randomColors());
        });
    }
}

function randomColors() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function selectPickedColor() {
    var randomNum;
    if(numOfSquares === 3) {
        randomNum = Math.floor(Math.random() * 3);
    } else {
        randomNum = Math.floor(Math.random() * 6);
    }
    var squares = $(".squares");
    return squares[randomNum].style.backgroundColor;
}

function setUpSquares() {
    generateRandomColors();
    pickedColor = selectPickedColor();
    $("#colorDisplay").text(pickedColor.toUpperCase());
    squares.on("click", function(){
        var clickedSquare = $(this).css("background-color");
        if(clickedSquare === pickedColor) {
            $("#messageDisplay").text("CORRECT!");
            $("#reset").text("PLAY AGAIN?");
            squares.css("background-color", pickedColor);
            $("h1").css("background-color", pickedColor);
        } else {
            $(this).css("background-color", "#232323");
            $("#messageDisplay").text("Try Again!");
        }
    });
}

function reset() {
    $("h1").css("background-color", "steelblue");
    $("#messageDisplay").text("");
    setUpSquares();
}

