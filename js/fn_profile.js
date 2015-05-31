var ncp = '#loader-image';

$(function(){
    $('.left, .right').css('height', $(window).height()-60+'px');

    $('a').bind("click", function(){

        path = $(this).attr('href');
        if (path.indexOf('http') == -1) {
            adress = window.location.search;
            if(adress.length != 0) {
                 path = path.replace(".html", "")
                window.location.search = path;
            }


            $('*').animate({'opacity': 0.8}, 300, function(){});
            $('#loader-image').css('opacity', 1).fadeIn(100);


            $('.right').html("").load(path + " .right", function(){

               content = $('.right .right').html();
               $('.right').html("").html(content);
               $('#loader-image').fadeOut(100);

               setTimeout(function(){

                // $('.right').fadeIn(500);
                $('*').animate({'opacity': 1.0}, 300, function(){});

               }, 100)

            });


            return false;
        }

    });

});

