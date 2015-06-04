$(function(){

    var photoViewNum = 6;

    $(".instagram").html('<p class="txt01">ロード中...</p>');
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/media/recent/",
        data: {
            access_token: "107f702f3e3e4190b03425d4ae2c2654",
            count: photoViewNum
        },
        cache: false,
        dataType: "jsonp",
        error: function() {
            $(".instagram").html('<p class="txt01">情報の取得に失敗しました。リロードするか時間を開けてアクセスして下さい。</p>');
        },
        success: function(data) {
            $(".txt01").remove();
            $(".instagram").append('<ul class="img">')
            for (var i = 0, length = photoViewNum; i < length; i++) {
                $(".instagram .img").append($("<li>").append($("<a>").attr("href", data.data[i].link).attr("target", "_blank").append($("<img>").attr("src", data.data[i].images.standard_resolution.url))));
            }
        }
    });

});