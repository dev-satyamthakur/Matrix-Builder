function getRows(pattern) {
  if (pattern[0] == pattern[1]) {
    pattern = pattern.slice(1, pattern.length - 1);
  }
  let rowsString = [];
  let currRow = "";
  let openBracketCount = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == "[") {
      openBracketCount++;
    } else if (pattern[i] == "]") {
      rowsString.push(currRow);
      currRow = "";
      openBracketCount = 0;
    } else if (openBracketCount == 1) {
      currRow += pattern[i];
    }
  }
  let rows = [];
  for (let i = 0; i < rowsString.length; i++) {
    let currString = rowsString[i];
    let currRowTemp = currString.split(",");
    rows.push(currRowTemp);
  }
  return rows;
}

const myrow = getRows("[[1, 2, 3], [2, 4, 6]]");

for (let i = 0; i < myrow.length; i++) {
  for (let j = 0; j < myrow[i].length; j++) {
    process.stdout.write(myrow[i][j] + " ");
  }
  process.stdout.write("\n");
}
