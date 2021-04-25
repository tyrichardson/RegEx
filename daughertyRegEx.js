/*
bowling scores
game1 = 'XXXXXXXXXXXX' (300)
game2 = '1/1/1/1/1/1/1/1/1/1/1' (120?)
game3 = '131-1-1-1-1-1-1-1-1-' (13)

X = strike
	10 points, plus value of next two rolls
/ = spare
	10 points, plus value of next roll
"-" = gutter ball
single digit = pins down with single roll

10 frames per game, two extra rolls if a strike in  frame 10, 1 extra roll if a spare in frame 10

write a function that takes a "game" string and returns the final score
*/

//game3:
let game3 = "131-1-1-1-1-1-1-1-1-";
let gutterArray = [];

for (var i = 0; i < game3.length; i++) {
  gutterArray.push(game3[i]);
}
console.log(gutterArray);

let filterArr = gutterArray.filter((el) => el !== "-");

let mapArr = filterArr.map((el) => parseInt(el));
console.log(mapArr);

let reducer = (accum, current) => accum + current;
console.log(mapArr.reduce(reducer, 0));

//game2:
let game2 = "1/1/1/1/1/1/1/1/1/1/1";
let spareArray = [];
//let score = 0;
let spare = "10";

for (var i = 0; i < game2.length; i++) {
  spareArray.push(game2[i]);
}
console.log(spareArray);

for (let i = 0; i < spareArray.length; i++) {
  if (spareArray[i] === "/") {
    spareArray[i] = spare;
  }
}

console.log(spareArray);

let filterArrSpare = spareArray.filter((el) => el !== "-");

let mapArrSpare = filterArrSpare.map((el) => parseInt(el));
console.log(mapArrSpare);

let reducerSpare = (accum, current, currentIndex, array) => {
  if (current === 10) {
    return accum + current + array[currentIndex + 1];
  }
  return accum + current;
};
console.log(mapArrSpare.reduce(reducerSpare, 0));

let game1 = "XXXXXXXXXXXX";
let strikeArray = [];
let score = 0;
let strike = "10";

for (var i = 0; i < game1.length; i++) {
  strikeArray.push(game1[i]);
}
console.log(strikeArray);

for (let i = 0; i < strikeArray.length; i++) {
  if (strikeArray[i] === "X") {
    strikeArray[i] = strike;
  }
}

console.log(strikeArray);

let filterArrStrike = strikeArray.filter((el) => el !== "-" && el !== "/");

let mapArrStrike = filterArrStrike.map((el) => parseInt(el));
console.log(mapArrStrike);

let reducerStrike = (accum, current, currentIndex, array) => {
  if (current === 10 && currentIndex < 10) {
    score = accum + current + array[currentIndex + 1] + array[currentIndex + 2];
  }
  return score;
};

console.log(mapArrStrike.reduce(reducerStrike, 0));
