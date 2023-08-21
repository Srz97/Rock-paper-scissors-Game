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


$(document).ready(function(){

  $(".computer-area .btn").hide();
  $( ".player-area.active  .btn--click" ).click(function() {
      // Checking if the game is active
      if($(".player-area").hasClass("active") == true){
          // Hide player buttons and show the clicked button
          $(".player-area .btn--click").hide();
          $(this).show();

          // Get the value of the clicked option
          var playerChoice = parseInt($(this).attr("value"));
              
          // Generate a random integer between 1 and 3 for computer's choice
          var computerChoice = Math.floor((Math.random() * 3) + 1);
          
          // Show the computer's selected button
          $(".computer-area .btn--game-" + computerChoice).show();

          // Initialize result string
          var result = "";

          // Compare player's choice with computer's choice based on Rock-Paper-Scissors rules
          if (
              (playerChoice == 1 && computerChoice == 3) ||
              (playerChoice == 2 && computerChoice == 1) ||
              (playerChoice == 3 && computerChoice == 2)
          ) {
              result = "You won!";
              var currentYourScore = parseInt($(".your-score span").html());
              currentYourScore = currentYourScore + 1;
              $(".your-score span").html(currentYourScore)
          } else if (
              (playerChoice == 1 && computerChoice == 2) ||
              (playerChoice == 2 && computerChoice == 3) ||
              (playerChoice == 3 && computerChoice == 1)
          ) {
              result = "Your device wins";
              var currentComputerScore = parseInt($(".computers-score span").html());
              currentComputerScore = currentComputerScore + 1;
              $(".computers-score span").html(currentComputerScore)
          } else {
              result = "Oh it's a Draw";
              var currentDrawScore = parseInt($(".draw span").html());
              currentDrawScore = currentDrawScore + 1;
              $(".draw span").html(currentDrawScore)
          }

          // Display result and remove the active class
          $(".result-area").html(result);
          $(".player-area").removeClass("active");
      
          // Set a timer to reset the game after 2 seconds (adjust the time as needed)
          setTimeout(function() {
            resetGame();
        }, 2000);
        }
      });

      
      function resetGame() {
        $(".computer-area .btn").hide();
        $(".player-area .btn--click").show();
        $(".player-area").addClass("active");
        $(".result-area").html("Choose your Warrior");
    }
  });
