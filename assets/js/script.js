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
      }

      
  });

  $( "#reset-btn" ).click(function() {
      // Hide computer buttons and show player buttons
      $(".computer-area .btn").hide();
      $(".player-area .btn--click").show();
      // Activate the game
      $(".player-area").addClass("active");
      // Reset result area message
      $(".result-area").html("Choose your Warrior");
  });
   
});

// Rest of the code for modal functionality...
