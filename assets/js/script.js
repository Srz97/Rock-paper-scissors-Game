


$(document).ready(function(){
    $(".computer-area .btn").hide();
    $( ".player-area  .btn--click" ).click(function() {
        $(".player-area .btn--click").hide();
        $(this).show();

        var check_cliked_option = $(this).attr("value");
               
        var rendom_int = Math.floor((Math.random() * 3) + 1);
        
        $(".computer-area .btn--game-"+rendom_int).show();

        var result = "";

        if(check_cliked_option == rendom_int){
            result = "Draw";
        }
        if(check_cliked_option > rendom_int){
            result = "Player wins";
        }
        if(check_cliked_option < rendom_int){
            result = "Computer wins";
        }
        $(".result-area").html(result);

        
      });
});
