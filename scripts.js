let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let play = false;

$(document).on("keydown", () => {
    if (play == false) {
        gamePattern = [];
        userClickedPattern = [];
        nextSequence();
        play = true;
    }
});

function nextSequence() {
    $("#level-title").html("Level " + gamePattern.length);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    playSound(randomChosenColour);
    animatePress(randomChosenColour);

    gamePattern.push(randomChosenColour);
}

function playSound(name) {
    audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer() {
    for (let i = 0; i <= userClickedPattern.length - 1; i++) {
        if (userClickedPattern[i] != gamePattern[i]) {
            return false;
        }
    }
    return true;
}

$(".btn").on("click", (e) => {
    let userChosenColour = e.currentTarget.id;
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    if (checkAnswer() == true) {
        if (userClickedPattern.length == gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 500);
            userClickedPattern = [];
        }
    } else {
        play = false;
        $("#level-title").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();
    }
});
