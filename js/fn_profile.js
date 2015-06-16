var ncp = '#loader-image';

var reload = (function(){



    $(window).resize(function(){
      $('.left, .right').css('height', $(window).height()-60+'px');
    });

    $('.left, .right').css('height', $(window).height()-60+'px');


    $('a').bind("click", function(){



        path = $(this).attr('href');
        if (path.indexOf('http') == -1) {
            path = path.replace(".html", "");
            history.pushState(null, null, "?" + path);

            // анимация
            $('*').animate({'opacity': 0.8}, 300, function(){});
            $('#loader-image').css('opacity', 1).fadeIn(100);

            $('.right').html("").load(path + ".html" + " .right", function(){

               content = $('.right .right').html();
               title = ($('.right .right').attr("data-title"));
               $("title").text(title);
               $('.right').html("").html(content);
               $('#loader-image').fadeOut(100);



               setTimeout(function(){

                // $('.right').fadeIn(500);
                $('*').animate({'opacity': 1.0}, 300, function(){


                });

               }, 100)

            });


            return false;
        }

    });


});

