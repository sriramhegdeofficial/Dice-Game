
var game = function() {
   var playerScore = [0,0];
   var currentPlayerScore = 0;
   var currentPlayer = 0;


   document.querySelector('#roll-dice').addEventListener('click', function() {
      var currentSum = 0;
    var currentDiceValue = getRandomNumber();
     
    updatePlayerCurrentScore(currentPlayer, currentDiceValue, currentSum);
       
   })

}


var getRandomNumber = function() {
    return Math.floor(Math.random() * 6) + 1 ;
}

var updatePlayerCurrentScore = function(currentPlayer,currentDiceValue, currentSum ) {
  
    if(currentPlayer === 0) {
        document.querySelector('#score-' + currentPlayer).textContent =
        currentSum += currentDiceValue; 
    }

}

game();