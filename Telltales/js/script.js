var clickSound = new Audio();
clickSound.src = "audios/click.mov";

var oceanSound = new Audio();
oceanSound.src = "audios/ocean.mov";

var spaceSound = new Audio();
spaceSound.src = "audios/space.mov";

var skySound = new Audio();
skySound.src = "audios/sky.mov";

var mermaidSound = new Audio();
mermaidSound.src = "audios/mermaid.mov";

var alienSound = new Audio();
alienSound.src = "audios/alien.mp3";

var birdsSound = new Audio();
birdsSound.src = "audios/birds.mp3";

var salsaSound = new Audio();
salsaSound.src = "audios/salsa.mp3";

var detectiveSound = new Audio();
detectiveSound.src = "audios/detective.mp3";

var jesterSound = new Audio();
jesterSound.src = "audios/jester.mp3";

var knifeSound = new Audio();
knifeSound.src = "audios/knife.mov";

var bikeSound = new Audio();
bikeSound.src = "audios/bike.mov";

var barbieSound = new Audio();
barbieSound.src = "audios/barbie.mov";

$(document).ready(function () {
    $(".btn").click(function () {
        clickSound.pause();
        clickSound.currentTime = 0;
        clickSound.play();
    });
    $(".btn-start").click(function () {
        // Redirect to next page after interval due to click sound
        window.setTimeout(function () {
            window.location.href = "background.html";
        }, 300);
    });
    $(".btn-end").click(function () {
        window.setTimeout(function () {
            window.location.href = "background.html";
        }, 300);
    });
    $(".btn-bg").click(function () {
        const bg = $(this).attr("value");
        localStorage.removeItem("background");
        localStorage.setItem("background", bg);
        // Redirect to next page after interval due to click sound
        window.setTimeout(function () {
            window.location.href = "character.html";
        }, 300);
        console.log(localStorage.getItem("background"));
    });
    $(".btn-character").click(function () {
        const character = $(this).attr("value");
        localStorage.removeItem("character");
        localStorage.setItem("character", character);
        // Redirect to next page after interval due to click sound
        window.setTimeout(function () {
            window.location.href = "outfit.html";
        }, 300);
        console.log(localStorage.getItem("character"));
    });
    $(".btn-outfit").click(function () {
        const outfit = $(this).attr("value");
        localStorage.removeItem("outfit");
        localStorage.setItem("outfit", outfit);
        // Redirect to next page after interval due to click sound
        window.setTimeout(function () {
            window.location.href = "item.html";
        }, 300);
        console.log(localStorage.getItem("outfit"));
    });
    $(".btn-item").click(function () {
        const item = $(this).attr("value");
        localStorage.removeItem("item");
        localStorage.setItem("item", item);
        // Redirect to next page after interval due to click sound
        window.setTimeout(function () {
            window.location.href = "story.html";
        }, 300);
        console.log(localStorage.getItem("item"));
    });
    function print() {
        $(".character").text(localStorage.getItem("character"));
        $(".background").text(localStorage.getItem("background"));
        $(".outfit").text(localStorage.getItem("outfit"));
        $(".item").text(localStorage.getItem("item"));
    }
    print();

    if (localStorage.getItem("outfit") == "detective") {
        $(".para-detective").show();
        $(".para-starting").show();
    }
    else if (localStorage.getItem("outfit") == "jester") {
        $(".para-jester").show();
        $(".para-starting").show();
    }
    else if (localStorage.getItem("outfit") == "salsa") {
        $(".para-salsa").show();
        $(".para-starting").show();
    };

    if (localStorage.getItem("outfit") === null) {
        $(".btn-end").show();
    }
    console.log(localStorage);
});