$(document).ready(function () {
    $(".btn-pause").click(function () {
        if ($(".pause-icon").hasClass("fa-play")) {
            $(".pause-icon").removeClass("fa-play")
            $(".pause-icon").addClass("fa-pause")
        }
        else {
            $(".pause-icon").removeClass("fa-pause")
            $(".pause-icon").addClass("fa-play")
        }
    });
    $(".transition-video")[0].autoplay = true;
    $(".transition-video").bind("ended", function () {
        $(this).hide();
        $(".black-bg").hide();
    });
    $("#videoPlayer").bind("ended", function () {
        $(this).hide();
        $(".video-img").hide();
        $(".after-video-button").show();
    });
});