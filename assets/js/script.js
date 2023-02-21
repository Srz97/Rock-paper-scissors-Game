


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
                result = "Oh it's a Draw";
                var current_ti_score = parseInt($(".draw span").html());
                current_ti_score = current_ti_score + 1;
                $(".draw span").html(current_ti_score)
            }
            if(check_cliked_option > rendom_int){
                result = " Congratulations You won!";
                var current_wi_score = parseInt($(".your-score span").html());
                current_wi_score = current_wi_score + 1;
                $(".your-score span").html(current_wi_score)
            }
            if(check_cliked_option < rendom_int){
                result = "Your device wins";
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
        $(".result-area").html("Choose your Warrior")
      });
     
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rules-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}