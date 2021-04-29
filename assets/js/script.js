$("#dice-color").val("#ffffff");
$("#dot-color").val("#f40607");
let rnd;
let x, y;
$("#spin").click(function(e) {
    e.preventDefault();
    //$('#picture').show();
    // $('#picture').show();
    // $('#picture').css("display", "block");

    rnd = Math.floor(Math.random() * 6 + 1);
    switch (rnd) {
        case 1:
            x = 720;
            y = 810;
            break;
        case 6:
            x = 720;
            y = 990;
            break;
        default:
            x = 720 + (6 - rnd) * 90;
            y = 900;
            break;
    }

    if (rnd == 1) {

        setTimeout(function() {
            window.location = "creators-biography.html";
        }, 2000);

    } else if (rnd == 2) {
        setTimeout(function() {
            window.location = "paprika.html";
        }, 2000);

    } else if (rnd == 3) {
        setTimeout(function() {
            window.location = "telltales.html";
        }, 2000);

    } else if (rnd == 4) {
        setTimeout(function() {
            window.location = "MusicIsTimeTravel.html";
        }, 2000);

    } else if (rnd == 5) {
        setTimeout(function() {
            window.location = "mango-tree.html";
        }, 2000);

    } else if (rnd == 6) {
        setTimeout(function() {
            window.location = "hard-luck.html";
        }, 2000);

    }

    $(".dice").css(
        "transform",
        "translateZ(-100px) rotateY(" + x + "deg) rotateX(" + y + "deg)"
    );

});

// $("#dot-color").change(function() {
//     const dot = $("#dot-color").val();
//     $(".dot").css("background-color", dot);
// });
// $("#dice-color").change(function() {
//     const dice = $("#dice-color").val();
//     $(".side").css("background-color", dice);
// });