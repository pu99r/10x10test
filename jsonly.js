let array = [];
for (let i = 0; i < 10; i++) {
  array[i] = [];
  for (let j = 0; j < 10; j++) {
    array[i][j] = Math.floor(Math.random() * 201) - 100;
  }
}
let minAll = array[0][0];
let minAllImdex = 0;
for (let i = 0; i < 10; i++) {
  let minPositive = array[i].filter((num) => num > 0).sort((a, b) => a - b)[0];
  for (let j = 0; j < 10; j++) {
    if (array[i][j] < minAll) {
      minAll = array[i][j];
      minAllImdex = i;
    }
  }
  array[i].push(minPositive);
}

function minReplacements(nums) {
  let replacements = 0;
  let consecutive = 0;

  for (let num of nums) {
    if (num > 0) {
      consecutive = consecutive > 0 ? consecutive + 1 : 1;
    } else if (num < 0) {
      consecutive = consecutive < 0 ? consecutive - 1 : -1;
    } else {
      consecutive = 0;
    }

    if (Math.abs(consecutive) === 3) {
      replacements++;
      consecutive = 0;
    }
  }

  return replacements;
}

for (let i = 0; i < 10; i++) {
  let ArrLine = array[i].slice(0, -1);
  let Min = array[i][array[i].length - 1];
  ArrLine.push("|");
  ArrLine.push(`Min ${Min}`);
  ArrLine.push(`Replace ${minReplacements(ArrLine)}`);
  if (i == minAllImdex) {
    ArrLine.push(`*`);
  }
  console.log(`${ArrLine.join("\t")}`);
}
