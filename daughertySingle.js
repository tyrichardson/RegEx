// http://www.fryes4fun.com/Bowling/scoring.htm used to verify score totals

let game1 = "XXXXXXXXXXXx"; // perfect game
let game2 = "1/1/1/1/1/1/1/1/1/1/1"; // all spares, 1 bonus
let game3 = "131-1-1-1-1-1-1-1-1-"; // no spares, no strikes, frames not reported correctly (works for sequential gutter balls), 10 frames
let game4 = "11111111111111111111"; // no spares, no strikes, no gutters, frames reported correctly, 10 frames, no bonus
let game5 = "111/1/1/1/1/1/1/1/1/1"; // all spares but one
let game6 = "111/1/1/1/1/1/1/1/11"; // spares, but not in final frame
let game7 = "XX11XXXXXXXXX"; // some strikes, two strikes in final frames
let game8 = "XX11XXXXXXXX1"; // some strikes, 1 pin in final frame

let game9 = "X3-5/x237/-52/9-XxX"; // mix of all possible values, bonus frame
let game10 = "X3-5/x237/-52/9-22"; // mix of all possible values, no bonus

let gameTooFew = "xxxxxxxxxxx";
let gameTooMany = "1234567890987654321123";

let gameInvalidChar = "X3-5/x237/-52/9-zxX";

const re = /^[Xx\-\/\d]*$/;

function testScore(game) {
  let OK = re.exec(game);
  if (!OK) {
    console.log("Invalid bowling score: invalid character(s) in string.");
  } else {
    return bowlingScore(game); // can be called before defined due to JS hoisting of function declarations
  }
}

function bowlingScore(game) {
  if (game.length < 12 || game.length > 21) {
    console.log(
      "Invalid bowling score: fewer than 12 or more than 21 values in string."
    );
  } else {
    console.log("***new run of code***");
    console.log("game ", game);
    let array = [];
    let score = 0;
    for (let i = 0; i < game.length; i++) {
      if (game[i] === "X" || game[i] === "x") {
        array.push(10);
      } else if (game[i] === "-") {
        array.push(0);
      } else if (game[i] === "/") {
        array.push(10 - game[i - 1]);
      } else {
        array.push(parseInt(game[i]));
      }
    }
    console.log(array);

    array.forEach(function (element, i) {
      if (element < 10) {
        if (game[i + 1] == "/" && i == array.length - 3) {
          score += element;
        } else if (i === array.length - 1 && array[i - 1] !== 10) {
          console.log("last bonus frame");
          score += element;
        } else if (i === array.length - 1 && array[i - 1] === 10) {
          console.log("last bonus frame");
        } else if (game[i + 1] == "/") {
          score += element + array[i + 2];
        } else {
          score += element;
        }
        console.log(score);
      } else {
        if (i == array.length - 3) {
          score += element + array[i + 1] + array[i + 2];
        } else if (i == array.length - 2) {
          // score += element + array[i + 1];
          console.log("here");
        } else if (i === array.length - 1) {
          console.log("last bonus frame");
        } else {
          score += element + array[i + 1] + array[i + 2];
        }
        console.log(score);
      }
    });

    return score;
  }
}

console.log("Final score game1 = ", testScore(game1)); // 300
console.log("Final score game2 = ", testScore(game2)); // 110
console.log("Final score game3 = ", testScore(game3)); // 13
console.log("Final score game4 = ", testScore(game4)); // 20
console.log("Final score game5 = ", testScore(game5)); // 101
console.log("Final score game6 = ", testScore(game6)); // 92
console.log("Final score game7 = ", testScore(game7)); // 245
console.log("Final score game8 = ", testScore(game8)); // 236
console.log("Final score game9 = ", testScore(game9)); // 129
console.log("Final score game10 = ", testScore(game10)); // 103

console.log("Final score gameTooFew = ", testScore(gameTooFew));
console.log("Final score gameTooMany = ", testScore(gameTooMany));

console.log("Final score gameInvalidChar = ", testScore(gameInvalidChar));
