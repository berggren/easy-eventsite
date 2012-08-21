/*
    Get videos from youtube channel
*/

$(window).load(function() {
    $.getJSON('http://gdata.youtube.com/feeds/api/playlists/' + SETTINGS.youtube_playlist + '?alt=json-in-script&callback=?', function(data){
        $.each(data['feed']['entry'], function(index, entry){
            var title = entry['title']['$t'];
            var videoid = entry['media$group']['media$player'][0]['url'].split('/').reverse()[0].split('=')[1].split('&')[0]
            var description = entry['media$group']['media$description']['$t'];
            var thumbnail = entry['media$group']['media$thumbnail'][0]['url'];
            var elem = $(
                '<div style="min-height:126px; margin-bottom: 20px;cursor: pointer;">' +
                '<div class="thumbnail-clip">' +
                '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="' + thumbnail + '">' +
                '</div>' +
                '<h2 id=' + videoid + '>' + title + '</h2>' +
                '<p>' + description + '<a href="#' + videoid + '"> Link</a></p>' +
                '</div><hr>'
            );
            $('#videos').append(elem);
            $(elem).click(function() {
                var iframe = $('<h2 id=' + videoid + '>' + title + '</h2><br><div class="embed-container"><iframe type="text/html" src="http://www.youtube.com/embed/' + videoid + '?autoplay=1" frameborder="0"></iframe></div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
                $(this).replaceWith(iframe);
            });
         });
        if (window.location.hash) {
            var f = $(window.location.hash).offset().top;
            $("body").scrollTop(f);
        }
    });
    $("#video-progress").hide();
    $("#videos").show();
});
