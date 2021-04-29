let pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', stopping);

let playButton = document.getElementById('playButton');
playButton.addEventListener('click', playing);

var audio = document.getElementById('introAudio');
let stopSlides = false;

function stopping() {
    stopSlides = true;
    audio.pause();
    showSlides();
}

function playing() {
    stopSlides = false;
    audio.play();
    showSlides();
}

var slideIndex = 0;

function showSlides() {
    if (stopSlides == false) {
        var slides = document.getElementsByClassName('mySlides');
        var i;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            location.replace("cassettes.html");
        }
        slides[slideIndex - 1].style.display = "block";

        switch (slideIndex) {
            case 1:
                audio.currentTime = 0;
                audio.play();
                setTimeout(showSlides, 3000);
                break;
            case 2:
                audio.currentTime = 3;
                audio.play();
                setTimeout(showSlides, 3000);
                break;
            case 3:
                audio.currentTime = 6;
                setTimeout(showSlides, 5000);
                audio.play();
                break;
            case 4:
                audio.currentTime = 11;
                setTimeout(showSlides, 4000);
                audio.play();
                break;
            case 5:
                audio.currentTime = 15;
                setTimeout(showSlides, 4000);
                audio.play();
                break;
            case 6:
                audio.currentTime = 19;
                setTimeout(showSlides, 5000);
                audio.play();
                break;
            case 7:
                audio.currentTime = 24;
                setTimeout(showSlides, 8000);
                audio.play();
                break;
        }

    } else {
        slideIndex - 1;

    }
}
// showSlides();
document.getElementById("mute_audio").addEventListener('click', function() {
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pauseButton').style.display = 'block';
    document.getElementById('alert_msg').style.display = 'none';

    this.style.background = "url('../images/unmute.png')";
    this.style.display = 'none';
    playing();
})