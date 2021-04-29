$(document).ready(function() {
    $(".slipper-color").click(function() {
        const slipperColor = $(this).attr("value");
        localStorage.removeItem("slipper");
        localStorage.setItem("slipper", slipperColor);
        // Redirect to next page after interval due to click sound
        // window.setTimeout(function() {
        //     window.location.href = "character.html";
        // }, 300);
    });
    $(".shirt-color").click(function() {
        const shirtColor = $(this).attr("value");
        localStorage.removeItem("shirt");
        localStorage.setItem("shirt", shirtColor);
    });
    // $(".setting-button").click(function() {
    //     const shirtColor = $(this).attr("value");
    //     localStorage.removeItem("shirt");
    //     localStorage.setItem("shirt", shirtColor);
    // });
    $(".outside-activity").click(function() {
        const outsideactivity = $(this).attr("value");
        localStorage.removeItem("outside");
        localStorage.setItem("outside", outsideactivity);
    });

    $(".inside-activity").click(function() {
        const insideactivity = $(this).attr("value");
        localStorage.removeItem("inside");
        localStorage.setItem("inside", insideactivity);
    });
    $(".game-console").click(function() {
        const gameconsole = $(this).attr("value");
        localStorage.removeItem("game");
        localStorage.setItem("game", gameconsole);
    });

    $(".knock-activity").click(function() {
        const knockactivity = $(this).attr("value");
        localStorage.removeItem("knock");
        localStorage.setItem("knock", knockactivity);
    });

    // Video Player Controls
    var videoPlayer = document.getElementById("mainVideo");
    $(".btn-play").click(function() {
        videoPlayer.play();
    });
    $(".btn-pause").click(function() {
        videoPlayer.pause();
    });
    $(".btn-stop").click(function() {
        videoPlayer.currentTime = 0;
    });
});