// test
let Sudoku = require('./solve')
let test = [
  [0, 6, 0, 0, 9, 3, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 5, 0, 0],
  [0, 3, 0, 4, 0, 0, 0, 9, 0],
  [1, 0, 8, 0, 2, 0, 0, 0, 4],
  [0, 0, 0, 3, 0, 9, 0, 0, 1],
  [2, 0, 0, 0, 1, 0, 6, 0, 9],
  [0, 8, 0, 0, 0, 6, 0, 2, 0],
  [0, 0, 4, 0, 0, 0, 8, 0, 7],
  [0, 0, 0, 7, 0, 5, 0, 1, 0]
]

let results = Sudoku.solve(test);
for (let i = 0; i < results.length; i++) {
  console.log(results[i]);
}
console.log(`found ${results.length} results`);
console.log(`------ end ------`);