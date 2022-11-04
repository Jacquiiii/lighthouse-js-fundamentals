//final position will be [-1, 4]

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  let position = [];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'west') {
      x--;
    } else if (moves[i] === 'east') {
      x++;
    } else {
      y--;
    }
  }
  position.push(x, y);
  return position;
}


console.log(finalPosition(moves));