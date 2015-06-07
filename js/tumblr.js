$(function() {
    url = "http://your.tumblr.com/api/read/json?num=4&type=text&callback=?";
    $.getJSON(url, function(data) {
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
            if(cnt === 0){
                strTag = "<div class=\"news_detail col-md-3 col-xs-6\"><span class=\"news_num\">New</span><h4 class=\"service-heading\">"+ title +"</h4><span class=\"news_date\">"+ date +"</span>"+ text +"<a href=\""+ url +"\" class=\"news_more\">more...</a></div>";
                $("#masonry").append( strTag );
            }else{
                strTag = "<div class=\"news_detail col-md-3 col-xs-6\"><h4 class=\"service-heading\">"+ title +"</h4><span class=\"news_date\">"+ date +"</span>"+ text +"<a href=\""+ url +"\" class=\"news_more\">more...</a></div>";
                $("#masonry").append( strTag );
            }
        });
    });
});