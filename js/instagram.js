$(function(){
    var photoViewNum = 4;
    $.ajax({
        url: "https://api.instagram.com/v1/users/self/media/recent/",
        data: {
            access_token: "youraccess_token",
            count: photoViewNum
        },
        cache: false,
        dataType: "jsonp",
        error: function() {
        },
        success: function(data) {
            for (var i = 0, length = photoViewNum; i < length; i++) {
                $("#instagram").append("<div class=\"col-md-3 col-xs-6 portfolio-item\"><a href=\""+data.data[i].link+"\" class=\"portfolio-link\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fa fa-instagram fa-3x\"></i></div></div><img src=\""+data.data[i].images.standard_resolution.url+"\" class=\"img-responsive\"></a></div>");
            }
        }
    });
});