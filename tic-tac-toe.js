// Wait until the HTML has finished loading before running our code.
// (The <script> tag is in the <head>, so the board doesn't exist yet when this file first runs.)
document.addEventListener("DOMContentLoaded", function () {
  // Get the board, then all the divs (squares) inside it.
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");

  // NEW: whose turn it is. X always goes first.
  let currentPlayer = "X";

  // NEW: a record of the board. 9 slots, one per square (numbered 0 to 8).
  const gameState = ["", "", "", "", "", "", "", "", ""];

  // Go through each square. "index" is its position number (0 to 8).
  squares.forEach(function (square, index) {
    // Exercise 1: give every square the "square" class so the CSS styles it.
    square.classList.add("square");

    // NEW - Exercise 2: when this square is clicked...
    square.addEventListener("click", function () {
      square.textContent = currentPlayer;     // show X or O in the box
      square.classList.add(currentPlayer);    // add class "X" or "O" for the colour
      gameState[index] = currentPlayer;       // remember it in our record

      // switch turns
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
    });
  });
});
