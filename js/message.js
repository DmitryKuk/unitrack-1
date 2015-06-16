
$(function() {
  $( "#sortable" ).sortable({ handle:'.sort-list' , scroll:false });
  $( "#sortable" ).disableSelection();


  $(".close-list").on("click", function(){

        $(this).parent().fadeOut()

  })

  $(".list-p").on("click", function(){
    $(".list-message").hide();
    $(".message").show()




  })


});

