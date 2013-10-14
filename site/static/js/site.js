$(document).ready(function(){
    if (SETTINGS.twitter) {
        //$('#social').append('<div class="twitter-timeline"></div>');
        $('head').append('<script id="twitter-wjs" src="http://platform.twitter.com/widgets.js" type="text/javascript"><\/script>');
        $('#social').append('<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/search?q=' + SETTINGS.twitterHashTag + '" data-widget-id="' + SETTINGS.twitterWidgetID +'">Tweets about "' + SETTINGS.twitterHashTag + '"<\/a>');
        $('#hashtag').text(SETTINGS.twitterHashTag);
        $('#social').show();
    } else {
        $("#social-tab").hide();
        $("#comment-tab").addClass("active");
        $("#comments").addClass("active");
    }
    if (! SETTINGS.comments) {
        $('#comment-tab').hide();
        $("#comments").removeClass("active").hide();
    }
    if (! SETTINGS.comments && ! SETTINGS.twitter) {
        $(".nav-tabs").hide();
    }

    $.each(SETTINGS.livestreams, function(key, obj) {
        if (obj.published) {
            if (obj.autostart) {
                var iframe = $('<span class="label label-important pull-left" style="margin-right:10px;margin-top:7px;">LIVE!</span><h2>' + obj.title + '</h2><br><div class="embed-container"><iframe type="text/html" src="' + obj.url + '" frameborder="0"></iframe></div><br><p>' + obj.description + '</p><hr>');
                $('#live-container').prepend(iframe);
            } else {
            var elem = $(
                '<div style="min-height:126px; margin-bottom: 20px;cursor: pointer;">' +
                    '<div class="thumbnail-clip">' +
                    '<img style="float:left;padding-right: 20px;padding-bottom: 10px;" src="static/img/play.jpg">' +
                    '</div>' +
                    '<span class="label label-important pull-left" style="margin-right:10px;margin-top:7px;">LIVE!</span><h2>' + obj.title + '</h2><p>' + obj.description + '</p>' +
                    '</div>' +
                    '<hr>'
            );
            $('#live-container').append(elem);
            $(elem).click(function() {
                var iframe = $('<span class="label label-important pull-left" style="margin-right:10px;margin-top:7px;">LIVE!</span><h2>' + obj.title + '</h2><br><div class="embed-container"><iframe type="text/html" src="' + obj.url + '" frameborder="0"></iframe></div><br><p>' + obj.description + '</p>');
                $(this).replaceWith(iframe);
            });
        } }
    });
});