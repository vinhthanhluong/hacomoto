export default function VideoModule() {
    if ($('.support-clip').length) {
        var player = fluidPlayer(
            'my-video', {
            "layoutControls": {
                "autoPlay": false,
                "mute": true,
                "allowTheatre": true,
                "playPauseAnimation": true,
                "playbackRateEnabled": true,
                "allowDownload": false,
                "playButtonShowing": true,
                "fillToContainer": false,
                "primaryColor": "white",
                // "htmlOnPauseBlock": {
                //     "html": "<div class='support-before'><a href='#' class='support-t'> Hướng Dẫn Lắp Đặt Sản Phẩm </a> <p class='support-desc'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </p> </div>",
                //     "height": "auto",
                //     "width": "auto"
                // },
                "posterImage": './img/bg-video.png' // Default false
            },
        }
        );

    }
}