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


$(document).ready(function () {
  // Initialize scores
  var yourScore = 0;
  var computerScore = 0;
  var drawScore = 0;

  // Hide computer choice buttons initially
  $(".computer-area .btn").hide();

  // Function to determine the winner and update the scores
  function determineWinner(playerChoice, computerChoice) {
    // Rock: 2, Paper: 3, Scissors: 1
    if (playerChoice === computerChoice) {
      drawScore++;
      $(".draw span").html(drawScore);
      return "It's a draw!";
    } else if (
      (playerChoice === 2 && computerChoice === 1) ||
      (playerChoice === 3 && computerChoice === 2) ||
      (playerChoice === 1 && computerChoice === 3)
    ) {
      yourScore++;
      $(".your-score span").html(yourScore);
      return "You win!";
    } else {
      computerScore++;
      $(".computers-score span").html(computerScore);
      return "Computer wins!";
    }
  }

  // Function to reset the game
  function resetGame() {
    // Hide all buttons in both player and computer areas
    $(".game-area .btn--click").hide();

    // Show player buttons and make player area active
    $(".player-area .btn--click").show();
    $(".player-area").addClass("active");

    // Clear the result area
    $(".result-area").html("Choose your warrior");
  }

  // Event handler for player's button click
  $(".player-area.active .btn--click").click(function () {
    // Checking if the game is active
    if ($(".player-area").hasClass("active")) {
      // Get the value of the clicked option (1, 2, or 3)
      var playerChoice = parseInt($(this).attr("value"));

      // Generate a random integer between 1 and 3 for the computer's choice
      var computerChoice = Math.floor(Math.random() * 3) + 1;

      // Hide all buttons in both player and computer areas
      $(".game-area .btn--click").hide();

      // Show only the clicked button and the computer's choice button
      $(this).show();
      $(".computer-area .btn--click[value='" + computerChoice + "']").show();

      // Determine the winner and update the result area
      var result = determineWinner(playerChoice, computerChoice);
      $(".result-area").html(result);

      // Remove the active class from the player's area
      $(".player-area").removeClass("active");

      // Set a timer to reset the game after 2 seconds (adjust the time as needed)
      setTimeout(function () {
        resetGame();
      }, 2000);
    }
  });

  // Initial game setup
  resetGame();
});
