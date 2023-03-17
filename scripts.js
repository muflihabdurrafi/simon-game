let simonPattern = [];
let playerPattern = [];

let counter = 0;

let greenAudio = new Audio("./sounds/green.mp3");
greenAudio.volume = 0.1;
let redAudio = new Audio("./sounds/red.mp3");
redAudio.volume = 0.1;
let yellowAudio = new Audio("./sounds/yellow.mp3");
yellowAudio.volume = 0.1;
let blueAudio = new Audio("./sounds/blue.mp3");
blueAudio.volume = 0.1;
let wrongAudio = new Audio("./sounds/wrong.mp3");
wrongAudio.volume = 0.1;

let green = $("#green");
let red = $("#red");
let yellow = $("#yellow");
let blue = $("#blue");
let level = $("#level-title");

$(document).on("keydown", () => {
    pick();
});

function pick() {
    let random = Math.floor(Math.random() * 4) + 1;

    simonPattern.push(random);
    level.html("Level " + simonPattern.length);

    switch (random) {
        case 1:
            green.addClass("pressed");
            greenAudio.play();
            setTimeout(() => {
                green.removeClass("pressed");
            }, 100);
            break;
        case 2:
            red.addClass("pressed");
            redAudio.play();
            setTimeout(() => {
                red.removeClass("pressed");
            }, 100);
            break;
        case 3:
            yellow.addClass("pressed");
            yellowAudio.play();
            setTimeout(() => {
                yellow.removeClass("pressed");
            }, 100);
            break;
        case 4:
            blue.addClass("pressed");
            blueAudio.play();
            setTimeout(() => {
                blue.removeClass("pressed");
            }, 100);
            break;
        default:
            break;
    }
    // console.log("random " + random);
}

function check() {
    for (let i = 0; i <= counter; i++) {
        if (playerPattern[i] != simonPattern[i]) {
            return false;
        }
    }
    return true;
}

green.on("click", () => {
    playerPattern.push(1);

    if (check() == true) {
        counter++;
        green.addClass("pressed");
        setTimeout(() => {
            green.removeClass("pressed");
        }, 100);
        setTimeout(() => {
            if (counter == simonPattern.length) {
                pick();
                counter = 0;
                playerPattern = [];
            }
        }, 200);
        greenAudio.play();
    } else {
        wrongAudio.play();
        alert("WRONG");
        playerPattern = [];
        simonPattern = [];
    }
});

red.on("click", () => {
    playerPattern.push(2);

    if (check() == true) {
        counter++;
        red.addClass("pressed");
        setTimeout(() => {
            red.removeClass("pressed");
        }, 100);
        setTimeout(() => {
            if (counter == simonPattern.length) {
                pick();
                counter = 0;
                playerPattern = [];
            }
        }, 200);
        redAudio.play();
    } else {
        wrongAudio.play();
        alert("WRONG");
        playerPattern = [];
        simonPattern = [];
    }
});

yellow.on("click", () => {
    playerPattern.push(3);

    if (check() == true) {
        counter++;
        yellow.addClass("pressed");
        setTimeout(() => {
            yellow.removeClass("pressed");
        }, 100);
        setTimeout(() => {
            if (counter == simonPattern.length) {
                pick();
                counter = 0;
                playerPattern = [];
            }
        }, 200);
        yellowAudio.play();
    } else {
        wrongAudio.play();
        alert("WRONG");
        playerPattern = [];
        simonPattern = [];
    }
});

blue.on("click", () => {
    playerPattern.push(4);

    if (check() == true) {
        counter++;
        blue.addClass("pressed");
        setTimeout(() => {
            blue.removeClass("pressed");
        }, 100);
        setTimeout(() => {
            if (counter == simonPattern.length) {
                pick();
                counter = 0;
                playerPattern = [];
            }
        }, 200);
        blueAudio.play();
    } else {
        wrongAudio.play();
        alert("WRONG");
        playerPattern = [];
        simonPattern = [];
    }
});
