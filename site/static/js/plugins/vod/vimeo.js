/*
    Get videos from vimeo channel
*/

$(window).load(function() {
    $.getJSON('https://vimeo.com/api/v2/channel/' + SETTINGS.vimeo_channel + '/videos.json?callback=?', function(data){
        $.each(data, function(index, entry){
            var title = entry['title'];
            var videoid = entry['id'];
            var description = entry['description'];
            var thumbnail = entry['thumbnail_medium'];
            var elem = $(
                '<div style="min-height:150px; margin-bottom: 20px;cursor: pointer;">' +
                '<div class="thumbnail-clip">' +
                '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="' + thumbnail + '">' +
                '</div>' +
                '<h2 id=' + videoid + '>' + title + '</h2>' +
                '<p>' + description + '<a href="#' + videoid + '"> Link</a></p>' +
                '</div><hr>'
            );
            $('#videos').append(elem);
            $(elem).click(function() {
                var elemclone = $(this).clone(true);
                var iframe = $('<h2 id=' + videoid + '>' + title + '</h2><br><div class="embed-container"><iframe src="http://player.vimeo.com/video/' + videoid + '?autoplay=true" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
                $(iframe).click(function() {
                    $(iframe).replaceWith(elemclone)
                });
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
