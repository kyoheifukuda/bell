url = "http://kyouheihei.tumblr.com/api/read/json?num=4&type=text&callback=?";

$(function() {
    $.getJSON(url, function(data) {
        var i = 1;
        $.each(data.posts, function(cnt, posts) {
            url    = posts["url"];
            title = "No Title";
            if(posts["regular-title"] !== null) {
                title = posts["regular-title"];
            }            date = posts["date-gmt"];
            text   = posts["regular-body"];
            if(text.length > 50) {
                text = text.substring(0, 50) + "…";
            }
            strTag = "<div class=\"news_detail col-md-3 col-xs-6\"><h4 class=\"service-heading\"><span class=\"news_num\">"+ i +"</span>"+ title +"</h4><span class=\"news_date\">"+ date +"</span>"+ text +"<a href=\""+ url +"\" class=\"news_more\">more...</a></div>";
            $("#masonry").append( strTag );
            i++;
        });
    });
});