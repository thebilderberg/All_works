"use strict";


// function matrix() {
//     let x = 0;
//     let y = 2;
//     while (x <= 100) {
//         x++;
//         if (x % 3 === 0) {
//             if (x % 5 === 0) {
//                 console.log(x);
//                 console.log('bingo');
//             }
//             else {
//                 console.log(x);
//                 console.log('bin');
//             }
//         }
//         else if (x % 5 === 0) {
//             if (x % 3 === 0) {
//                 console.log(x);
//                 console.log('bingo');
//             }
//             else {
//                 console.log(x);
//                 console.log('go');
//             }
//         }
//         else {
//             console.log(x);
//         }
//     }
// }

function matrix () {
    let x = 0
    while (x < 100) {
        x++
        if (x % 3 === 0 && x % 5 === 0) {
            console.log('bingo');
        }
        else if (x % 3 === 0) {
            console.log('bin');
        }
        else if (x % 5 === 0) {
            console.log('go');
        }
        else {
            console.log(x);
        }
    }
}

matrix();