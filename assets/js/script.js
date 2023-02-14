


$(document).ready(function(){

    $(".computer-area .btn").hide();
    $( ".player-area.active  .btn--click" ).click(function() {
        //checking condition either the game is active or not 
        if($(".player-area").hasClass("active") == true){
            //if the game is active then run the below code 
            $(".player-area .btn--click").hide();
            $(this).show();

            var check_cliked_option = $(this).attr("value");
                
            var rendom_int = Math.floor((Math.random() * 3) + 1);
            
            $(".computer-area .btn--game-"+rendom_int).show();

            var result = "";

            if(check_cliked_option == rendom_int){
                result = "Draw";
                var current_ti_score = parseInt($(".draw span").html());
                current_ti_score = current_ti_score + 1;
                $(".draw span").html(current_ti_score)
            }
            if(check_cliked_option > rendom_int){
                result = "You won!";
                var current_wi_score = parseInt($(".your-score span").html());
                current_wi_score = current_wi_score + 1;
                $(".your-score span").html(current_wi_score)
            }
            if(check_cliked_option < rendom_int){
                result = "Computer wins";
                var current_co_score = parseInt($(".computers-score span").html());
                current_co_score = current_co_score + 1;
                $(".computers-score span").html(current_co_score)
            }
            $(".result-area").html(result);
            // remove the active class once game is finish 
            $(".player-area").removeClass("active");
        }

        
      });
      $( "#reset-btn" ).click(function() {
        $(".computer-area .btn").hide();
        $(".player-area .btn--click").show();
        // activate game again
        $(".player-area").addClass("active");
      });
      $( "#rules-btn" ).click(function(){
         alert("Rock wins against scissors; paper wins against rock; and scissors wins against paper. If both players throw the same hand signal, it is considered a tie.")
      });
});

