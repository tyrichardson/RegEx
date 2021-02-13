let gameMixed = "X3-5/X237/-52/9-XXX";

function bowlingScore(game) {
    console.log("***new run of code***");
    let array = [];
    let score = 0;
    if (/[X+?\-+?\/]/) {
        console.log(game);
        for (let i = 0; i < game.length; i++) {
            if (game[i] === "X") {
                array.push({ strike: 10 });
            } else if (game[i] === "-") {
                array.push({ pins: 0 });
            } else if (game[i] === "/") {
                array.push({ spare: 10 });
            } else {
                array.push({ pins: parseInt(game[i]) });
            }
        }
    }
    console.log(array);
    // array.length will vary due to strikes in regular 10 frames and with a spare in the 10th frame, and again with strikes in the 10th and/or 11th frame
    // a better way: create the array of objects to reflect each FRAME of the game, then there will be 10 frames each with 2 rolls/points. Then the loop can iterate over 10 frames -- then over bonus roll 1 and/or two if they exist.
    let n;
    if (array[array.length - 3].strike) {
        n = 2;
        if (array[array.length - 2].strike) {
            score += 10 + 10 + array[array.length - 1].strike || array[array.length - 1].pins;
        } else if (array[array.length - 2].spare) {
            
        }
    } else if (array[array.length - 3].spare) {
        n = 1;
    } else {
        n = 0;
    }
    for (let i = 0; i < array.length - n; i++){
        //but if the last i is a strike or a spare, don't double count its score value...
            if (array[i].strike) {
                console.log('strike');
            }
            if (array[i].spare) {
                console.log('spare');
            }
            if (array[i].pins) {
                score += array[i].pins;
            }
        }
    
    console.log('score ', score);
}

bowlingScore(gameMixed);
