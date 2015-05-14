
var head = $('');
var preloadfn = function (arg){
	head.remove();


	$('#preload').css('display', 'block');
	if (arg != undefined) {
		namePage = arg;

	} else {

		var adress = (window.location.search).replace("?", "");
		if(adress.length != 0) $('body').attr('htm', adress)
		namePage = $('body').attr('htm');
	}


	if(namePage.indexOf('html') == -1) namePage += '.html';
	$.ajax({  
	    url: namePage, 
	    dataType: "html",
	    cache: false,  
	    success: function(html){  

	        $(".loadpage").html(html);
	        search = ".loadpage link,.loadpage script, .loadpage title, .loadpage style, .loadpage meta";
	        head = $(search); $(search).remove();
	      	$("head").append(head);

	      	$(function(){

	      		$('a').click(function(){

	      			path = $(this).attr('href');
	      			if (path.indexOf('http') == -1) {
	      				$('.loadpage').fadeOut(500);
	      				setTimeout(function(){
	      					head.remove();
	      					preloadfn(path);
	      				}, 500);
	      				$('#preload').fadeIn(500);
	      				

	      				return false;
	      				
	      			}
	      			
	      		})
	      			
	      	})
	      
	    }  
	}); 


	$(document).ready(function(){
		$('#preload').fadeOut(1500);

		setTimeout(function(){
			$('.loadpage').fadeIn(500);
		}, 1500);


		

	});

	return false;

}; preloadfn();

