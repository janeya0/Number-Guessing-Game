var usernumber = prompt("Guess a whole number between 1 and 10")

x =Math.floor(10*Math.random()+1)

if (usernumber==x) {
  document.write("Congratulations! You guessed the correct number on the FIRST TRY!");
  document.write(" You get 300 Points and a first place trophy for your win");
}
else if (usernumber<x && usernumber>=1 && usernumber<=10) {
  var usernumber1 = prompt("The number is GREATER. Guess again")
  if (usernumber1 == x &&usernumber1>=1 && usernumber1<=10) {
    document.write("Congratulations! You guessed the correct number!");
    document.write(" You get 200 Points and a second place trophy for your win");
  }
  else if (usernumber1<x && usernumber1>=1 && usernumber1<=10) {
    var usernumber3 = prompt("The number is GREATER. Guess again")
    if (usernumber3 == x &&usernumber3>=1 && usernumber3<=10) {
      document.write("Congratulations! You guessed the correct number!");
      document.write(" You get 100 Points and a third place trophy for your win");
    }
    else if (usernumber3<x && usernumber3>=1 && usernumber3<=10) {
      var usernumber7 = prompt("The number is GREATER. Try again")
      if (usernumber7 == x &&usernumber7>=1 && usernumber7<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
    }
    else if (usernumber3>x && usernumber3>=1 && usernumber3<=10) {
      var usernumber9 = prompt("The number is SMALLER. Try again")
      if (usernumber9 == x &&usernumber9>=1 && usernumber9<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
    }
  }
  else if (usernumber1>x && usernumber1>=1 && usernumber1<=10) {
    var usernumber5 = prompt("The number is GREATER. Guess again")
    if (usernumber5 == x &&usernumber5>=1 && usernumber5<=10) {
      document.write("Congratulations! You guessed the correct number!");
      document.write(" You get 100 Points and a third place trophy for your win");
    }
    else if (usernumber5<x && usernumber5>=1 && usernumber5<=10) {
      var usernumber11 = prompt("The number is GREATER. Try again")
      if (usernumber11 == x &&usernumbe11>=1 && usernumber11<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber11==x) && usenumber>=1 && usernumber<=10) {
        document.write("GAME OVER");
      }
    }
    else if (usernumber5>x && usernumber5>=1 && usernumber5<=10) {
      var usernumber13 = prompt("The number is SMALLER. Try again")
      if (usernumber13 == x &&usernumber13>=1 && usernumber13<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber13==x) && usenumber>=1 && usernumber<=10) {
        document.write("GAME OVER");
      }
    }
  }
}


else if (usernumber>x && usernumber>=1 && usernumber<=10) {
  var usernumber4 = prompt("The number is SMALLER. Guess again")
  if (usernumber4 == x && usernumber4>=1 && usernumber4<=10) {
    document.write("Congratulations! You guessed the correct number!");
    document.write(" You get 200 Points and a second place trophy for your win");
  }
  else if (usernumber4>x && usernumber4>=1 && usernumber4<=10) {
    var usernumber6 = prompt("The number is SMALLER. Guess again")
    if (usernumber6 == x && usernumber6>=1 && usernumber6<=10) {
      document.write("Congratulations! You guessed the correct number!");
      document.write(" You get 100 Points and a third place trophy for your win");
    }
    else if (usernumber6>x  && usernumber6>=1 && usernumber6<=10) {
      var usernumber10 = prompt("The number is SMALLER. Guess again")
      if (usernumber10 == x && usernumber10>=1 && usernumber10<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber10==x) && usernumber10>=1 && usernumber10<=10) {
        document.write("GAME OVER");
      }
    }
    else if (usernumber6<x && usernumber6>=1 && usernumber6<=10) {
      var usernumber12 = prompt ("The number is GREATER. Guess again")
      if (usernumber12 == x && usernumber12>=1 && usernumber12<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber12==x) && usernumber12>=1 && usernumber12<=10) {
        document.write("GAME OVER");
      }
    }
  }
  else if (usernumber4<x && usernumber4>=1 && usernumber4<=10) {
    var usernumber8 = prompt("The number is GREATER. Guess again")
    if (usernumber8 == x && usernumber8>=1 && usernumber8<=10) {
      document.write("Congratulations! You guessed the correct number!");
      document.write(" You get 100 Points and a third place trophy for your win");
    }
    else if (userumber8<x && usernumber8>=1 && usernumber8<=10) {
      var usernumber14 = prompt("The number is GREATER. Try again")
      if (usernumber14 == x && usernumber14>=1 && usernumber14<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber14==x) && usernumber>=1 && usernumber<=10) {
        document.write("GAME OVER");
      }
    }
    else if (usernumber8>x && usernumber8>=1 && usernumber8<=10) {
      var usernumber16 = prompt("The number is SMALLER")
      if (usernumber16 == x && usernumber16>=1 && usernumber16<=10) {
        document.write("Congratulations! You guessed the correct number!");
        document.write(" You get 10 Points and a fourth place medal for your win");
      }
      else if (!(usernumber16==x) && usernumber>=1 && usernumber<=10) {
        document.write("GAME OVER");
      }
    }
  }
}

else {
  document.write("INVALID INPUT");
}
