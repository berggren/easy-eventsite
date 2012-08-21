/*
    Get videos from NORDUnet MDS event
*/

$(window).load(function() {
    $.getJSON('https://play.sunet.se/api/v1/event/' + SETTINGS.mds_event + '/?format=jsonp&callback=?', function(data){
        $.each(data['videos'], function(index, entry){
            var title = entry['title'];
            var videoid = entry['id'];
            var url = entry['embed'];
            var description = entry['description'];
            var thumbnail = entry['thumbnail'];
            console.log(title, url, description, thumbnail);
            var elem = $(
                '<div style="min-height:150px; margin-bottom: 20px;cursor: pointer;">' +
                    '<div class="thumbnail-clip">' +
                    '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="https://play.sunet.se' + thumbnail + '">' +
                    '</div>' +
                    '<h2 id=' + videoid + '>' + title + '</h2>' +
                    '<p>' + description + '<a href="#' + videoid + '"> Link</a></p>' +
                    '</div><hr>'
            );
            $('#videos').append(elem);
            $(elem).click(function() {
                var iframe = $('<h2 id=' + videoid + '>' + title + '</h2><br><div class="embed-container"><iframe src="https://play.sunet.se' + url + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
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
