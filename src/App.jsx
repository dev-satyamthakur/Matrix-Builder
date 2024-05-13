import { useState } from "react";
import "./App.css";

function App() {
  const [patternMain, setPatternMain] = useState("");
  const [rows, setRows] = useState([]);
  const getRows = (pattern) => {
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
  };
  const processPattern = () => {
    let rows = getRows(patternMain);
    setRows(rows);
  };
  return (
    <div>
      <h3>Welcome to Matrix Builder</h3>
      <input
        type="text"
        value={patternMain}
        onChange={(e) => {
          setPatternMain(e.target.value);
        }}
      />
      <div>
        <button onClick={processPattern}>Create Pattern</button>
      </div>

      <div>
        {rows.map((row, index) => {
          return (
            <div key={index}>
              {row.map((col, index) => {
                return <span key={index}>{col}</span>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
