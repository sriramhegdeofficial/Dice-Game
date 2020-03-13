(function(){


var game = function() {
   var playerScore = [0,0];
   var currentPlayer = 0;
   var currentSum = 0;
    var currentDiceValue = 0;

    
  
    // while(playerScore[0] >= 100 || playerScore[1] >= 100) {
  

    document.querySelector('.current-status-' + currentPlayer).style.visibility = "visible";

   document.querySelector('#roll-dice').addEventListener('click', function(){

    currentDiceValue = getRandomNumber();
    console.log(currentDiceValue);
     
       
        currentSum = getSum(currentDiceValue, currentSum);
        document.querySelector('#score-' + currentPlayer).textContent = currentSum;
        if(currentDiceValue === 1) {
            if(currentPlayer === 1) {
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "hidden";
                currentPlayer = 0 ;
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "visible";
            }else {
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "hidden";
                currentPlayer = 1;
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "visible";
            }
        }
     
     

   });

   document.querySelector('#hold').addEventListener('click', function(){
    playerScore[currentPlayer] += currentSum;
    if(playerScore[currentPlayer] >= 10) {
        resetGame();
        return ;
    }
    document.querySelector('#player' + currentPlayer + '-current-score').textContent = playerScore[currentPlayer]; 
        
    currentSum = 0;
    document.querySelector('#score-' + currentPlayer).textContent = currentSum;
    if(currentPlayer === 1) {
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "hidden";
                currentPlayer = 0 ;
                document.querySelector('.current-status-' + currentPlayer).style.visibility = "visible";
    }else {
        document.querySelector('.current-status-' + currentPlayer).style.visibility = "hidden";
        currentPlayer = 1;
        document.querySelector('.current-status-' + currentPlayer).style.visibility = "visible";
    }
   });


   document.querySelector('#new-game').addEventListener('click', function(){
     
    resetGame();

});

    

    .0









}


var resetGame = function() {
    playerScore = [0,0];
     currentPlayer = 0;
     currentSum = 0;
      currentDiceValue = 0;
     
      document.querySelector('.current-status-0').style.visibility = "visible";
      document.querySelector('.current-status-1').style.visibility = "hidden";

      document.querySelector('#player0-current-score').textContent = 0;
      document.querySelector('#player1-current-score').textContent = 0;


      document.querySelector('#score-0').textContent = 0; 
      document.querySelector('#score-1').textContent = 0;
}



var getRandomNumber = function() {
    return Math.floor(Math.random() * 6) + 1 ;

}

var getSum = function(newValue, sum) {
    if(newValue === 1) {
        return 0;
    }
    else {
        return sum += newValue;
    }
}


game();

})();