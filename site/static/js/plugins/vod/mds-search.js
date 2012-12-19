/*
    Get videos from NORDUnet MDS event
*/

$(window).load(function() {
    $.getJSON('https://cdn.nordunet.tv/api/v1/publicvideo/search/?format=jsonp&q=tag:ndn2012&limit=0&callback=?', function(data){
        $.each(data['objects'], function(index, entry){
            var title = entry['title'];
            var videoid = entry['id'];
            var url = entry['embed'];
            var description = entry['description'];
            var thumbnail = entry['thumbnail'];
            var elem = $(
                '<div style="min-height:150px; margin-bottom: 20px;cursor: pointer;">' +
                    '<div class="thumbnail-clip">' +
                    '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="https://cdn.nordunet.tv' + thumbnail + '">' +
                    '</div>' +
                    '<h2 id=' + videoid + '>' + title + '</h2>' +
                    '<p>' + description + '<a href="#' + videoid + '"> Link</a></p>' +
                    '</div><hr>'
            );
            $('#videos').append(elem);
            $(elem).click(function() {
                var elemclone = $(this).clone(true);
                var iframe = $('<h2 id=' + videoid + '>' + title + '</h2><span class="pull-right" style="margin-top:-20px;cursor:pointer;"><i class="icon-remove-sign"></i> Close</span><br><div class="embed-container"><iframe src="https://cdn.nordunet.tv' + url + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div><br><p>' + description + '<a href="#' + videoid + '"> Link</a></p>');
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
