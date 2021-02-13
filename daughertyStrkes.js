let game7 = "XX11XXXXXXXXX"; // some strikes, two strikes in final frames

function bowlingScore(game) {
    if (/\X*/.test(game)) {
        let array = [];
        let score = 0;
        let strike = "10";

        for (let i = 0; i < game.length; i++) {
            array.push(game[i]);
        }
        console.log(array);

        for (let i = 0; i < array.length; i++) {
            if (array[i] === "X") {
                array[i] = strike;
            }
        }

        console.log(array);

        let mapArr = array.map((el) => parseInt(el));
        console.log(mapArr);

        let reducer = (accum, current, currentIndex, array) => {
            if (current === 10 && currentIndex < 10) {
                return accum + current + array[currentIndex + 1] + array[currentIndex + 2];
            } else {
                return accum + current;
            }
        }
        score = mapArr.reduce(reducer, 0);
        return score;
    }
}

console.log("Final score game7 = ", bowlingScore(game7));