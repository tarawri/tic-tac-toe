
$(document).ready(function (){
  let x = 'X';
  let o = 'O';
  let cont = 0;
  let play = ['X','O'];
  let isWon = false;

  let forX = 0;
  let foro = 0;
  let forTai = 0;

  let choessXAndO = function(event){
        
    $(event.target).off("click");    
    cont = cont + 1;
    if (cont % 2 === 0){
      console.log(cont + "=" + o);
      $(event.target).text(o);
    }else{
      console.log(cont + "=" + x);
      $(event.target).text(x);
    }
    //check if the player is win or not 
    ch();
  }

  // three variable was her

  $("li").click(choessXAndO);
  
  //// START function Ch /////
  let ch = function(){
     
    play.forEach(function(p){

      if ($("#i1").text() === p && $("#i2").text() === p && $("#i3").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;
      }else if($("#i4").text() === p && $("#i5").text() === p && $("#i6").text() === p)
      {
        $("p").text(p + (" you win"));   
        isWon = true;
      }else if ($("#i7").text() === p && $("#i8").text() === p && $("#i9").text()=== p)
      {
        $("p").text(p + (" you win"));
        isWon = true; 
      }else if ($("#i1").text() === p && $("#i4").text() === p && $("#i7").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;   
      }else if ($("#i2").text() === p && $("#i5").text() === p && $("#i8").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;
      }
      else if ($("#i3").text() === p && $("#i6").text()=== p && $("#i9").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;        
      }else if($("#i1").text()=== p && $("#i5").text() === p && $("#i9").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;  
      }else if($("#i3").text() === p && $("#i5").text() === p && $("#i7").text() === p)
      {
        $("p").text(p + (" you win"));
        isWon = true;
      }else if(cont === 9)
      {

        $('#ft').text(forTai = forTai + 1);
        console.log(forTai + p);
        $("p").text("Tie");
        restartGame()
      }

      if(isWon){
        $('#ft').text(forx = forX + 1);
        restartGame();
      }
    }); // end of loop
  } // end of ch function

  const restartGame = function(){
    isWon = false; 
    $("li").text("");
    cont = 0;
    $("li").off("click");
    $("li").click(choessXAndO);
  }
    //// END function Ch /////
});

