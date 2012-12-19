$(document).ready(function(){
    $("form").submit(function() {
        var t = $("input:first").val();
        $.getJSON('https://gdata.youtube.com/feeds/api/users/' + t + '/playlists' + '?v=2&alt=json-in-script&callback=?', function(data){
            $.each(data['feed']['entry'], function(index, entry){
                var title = entry['title']["$t"]
                var id = entry["yt$playlistId"]["$t"].replace("PL", "")
                $("#result").append("<h2>" + title + "</h2>").fadeIn("slow");
            });
        });
        return false;
    });
});