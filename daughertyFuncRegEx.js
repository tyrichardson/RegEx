let game1 = "XXXXXXXXXXXX"; // perfect game
let game2 = "1/1/1/1/1/1/1/1/1/1/1"; // all spares
let game3 = "131-1-1-1-1-1-1-1-1-"; // no spares, no strikes, frames not reported correctly (works for sequential gutter balls)
let game4 = "11111111111111111111"; // no spares, no strikes, no gutters, frames reported correctly
let game5 = "111/1/1/1/1/1/1/1/1/1"; // all spares but one
let game6 = "111/1/1/1/1/1/1/1/11"; // spares, but not in final frame
let game7 = "XX11XXXXXXXXX"; // some strikes, two strikes in final frames
let game8 = "XX11XXXXXXXX1"; // some strikes, 1 pin in final frame

// for a game with both strikes and spares (gutters are just zero), since both have scores of 10, one must track which values of 10 are for strikes and with for spares in order to score properly. One could continue using an array for this problem by pushing 'strike' or 'spare' in the next index after each 10, then referencing currentIndex + 1 to see if the 10 is a strike or spare. Or one could use an array of objects in these mixed instances using 'strike' and 'spare' as the keys with values of 10.
let game9 = "111/11XX111/11X1111"; //83

function bowlingScore(game) {
  //game1, perfect game
  if (/^X+$/.test(game)) {
    return 300;
  }
  //game9, mix of strikes and spares
  //see daughertySingle.js
    if ( /X/.test(game) && /\//.test(game) ) {
        console.log('game9 ', game);
  }
  //game7, game8, strikes
  if (/\X+/.test(game)) {
    let array = [];
    let score = 0;
    let strike = "10";

    for (let i = 0; i < game.length; i++) {
      array.push(game[i]);
    }
    //      console.log(array);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "X") {
        array[i] = strike;
      }
    }
    //      console.log(array);

    let mapArr = array.map((el) => parseInt(el));
    //     console.log(mapArr);

    let reducer = (accum, current, currentIndex, array) => {
      if (current === 10 && currentIndex < 10) {
        return (
          accum + current + array[currentIndex + 1] + array[currentIndex + 2]
        );
      } else {
        return accum + current;
      }
    };
    score = mapArr.reduce(reducer, 0);
    return score;
  }
  //game2, game5, game6, spares
  if (/\//.test(game)) {
    let spareArray = [];
    let score = 0;
    let spare = "10";

    for (let i = 0; i < game.length; i++) {
      spareArray.push(game[i]);
    }
    //        console.log(spareArray);

    for (let i = 0; i < spareArray.length; i++) {
      if (spareArray[i] === "/") {
        spareArray[i] = spare;
      }
    }
    //       console.log(spareArray);

    let mapArr = spareArray.map((el) => parseInt(el));
    //        console.log(mapArr);

    let reducer = (accum, current, currentIndex, array) => {
      if (current === 10) {
        return accum + current + array[currentIndex + 1];
      }
      return accum + current;
    };

    score = mapArr.reduce(reducer, 0);
    return score;
  }
  //game3, game4, gutters or no gutters, strikes, or spares
  if (/\-/.test(game)) {
    let gutterArray = [];
    let score = 0;

    for (var i = 0; i < game.length; i++) {
      gutterArray.push(game[i]);
    }
    //        console.log(gutterArray);

    let filterArr = gutterArray.filter((el) => el !== "-");

    let mapArr = filterArr.map((el) => parseInt(el));
    //       console.log(mapArr);

    let reducer = (accum, current) => accum + current;
    score = mapArr.reduce(reducer, 0);
    return score;
  } else {
    let array = [];
    let score = 0;

    for (var i = 0; i < game.length; i++) {
      array.push(game[i]);
    }
    //        console.log(array);

    let mapArr = array.map((el) => parseInt(el));
    //       console.log(mapArr);

    let reducer = (accum, current) => accum + current;
    score = mapArr.reduce(reducer, 0);
    return score;
  }

//end of function
}

console.log("Final score game1 = ", bowlingScore(game1));
console.log("Final score game2 = ", bowlingScore(game2));
console.log("Final score game3 = ", bowlingScore(game3));
console.log("Final score game4 = ", bowlingScore(game4));
console.log("Final score game5 = ", bowlingScore(game5));
console.log("Final score game6 = ", bowlingScore(game6));
console.log("Final score game7 = ", bowlingScore(game7));
console.log("Final score game8 = ", bowlingScore(game8));
console.log("Final score game9 = ", bowlingScore(game9));