export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.home-video').length) {


        var player = new YouTubeToHtml5({
            selector: '.youtube-video',
            attribute: 'data-yt',
            withAudio: true,
            formats: ['1080p', '720p', '360p'],
            autoload: false, // Disable loading videos on init, `.load()` method is required.

        });

        // Add loading class to video element
        player.addAction('api.before', function (element) {
            element.classList.add('is-loading');
        });

        // Remove loading class after API HTTP request completes.
        player.addAction('api.after', function (element) {
            element.classList.remove('is-loading');
        });

        // Now we can load videos.
        player.load();
    }

    $('.home-hacom-video .home-inner').on('click', function () {
        $(this).find('.home-text').remove();
    });

    $('.filter-tt').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.support-clip').on('click', function () {
       $('.support-be').remove();
    });

}