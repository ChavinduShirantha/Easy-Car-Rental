
let contents = ["Rent a Car Directly From Owner ", "Rent a Car Anywhere Anytime ", "SRI LANKA’S NO. 1 VEHICLE SHARING NETWORK "];

let charCount = 0;

let wordCount = 0;

setInterval(function () {
    animateText();
}, 400);

function animateText() {

    let content = contents[wordCount].substring(0, charCount) + "|";

    $("#content").text(content);

    charCount++;

    if (charCount == contents[wordCount].length) {

        charCount = 0;

        wordCount++;

        if (wordCount == contents.length) {

            wordCount = 0;

        }

    }

};

$(document).ready(function() {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});


$("#homeBtn").click(function() {
    $("#homeBtn>a").css("color", "#00a26e");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#aboutBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#00a26e");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#serviceBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#00a26e");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#carsBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#00a26e");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#clientBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#00a26e");
    $("#contactBtn>a").css("color", "#ffffff");
});

$("#contactBtn").click(function() {
    $("#homeBtn>a").css("color", "#ffffff");
    $("#aboutBtn>a").css("color", "#ffffff");
    $("#serviceBtn>a").css("color", "#ffffff");
    $("#carsBtn>a").css("color", "#ffffff");
    $("#clientBtn>a").css("color", "#ffffff");
    $("#contactBtn>a").css("color", "#00a26e");
});
