// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

describe('rock paper scissors', function() {
    const getMsg = (n) => `Player ${n} won!`;
  
    it('player 1 win', function() {
      Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
      Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
      Test.assertEquals(rps('paper', 'rock'), getMsg(1));
    });
  
    it('player 2 win', function() {
      Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
      Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
      Test.assertEquals(rps('rock', 'paper'), getMsg(2));
    });
  
    it('draw', function() {
      Test.assertEquals(rps('rock', 'rock'), 'Draw!');
      Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
      Test.assertEquals(rps('paper', 'paper'), 'Draw!');
    });
  });


// my code

const rps = (p1, p2) => {
    switch (p1){
        case 'scissors':
          switch (p2){
            case 'scissors':
              return('Draw!');
              break;
            case 'rock':
              return('Player 2 won!');
              break;
            case 'paper':
              return('Player 1 won!');
              break;
          }
          break;
        case 'rock':
          switch (p2){
            case 'scissors':
              return('Player 1 won!');
              break;
            case 'rock':
              return('Draw!');
              break;
            case 'paper':
              return('Player 2 won!');
              break;
          }
        break;
        case 'paper':
          switch (p2){
            case 'scissors':
              return('Player 2 won!');
              break;
            case 'rock':
              return('Player 1 won!');
              break;
            case 'paper':
              return('Draw!');
              break;
          }
        break;
    }
  };