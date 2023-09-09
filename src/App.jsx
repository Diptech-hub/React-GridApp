import "./index.css";
// solve the css, range utility and Grid component

function App() {
  const numRows = 2;
  const numCols = 4;

  const output = [];

  for (let i = 0; i < numRows; i++) {
    const result = [];
    for (let j = 0; j < numCols; j++) {
      result.push(<div className="cell" key={`cell-${i}-${j}`}></div>);
    }
    output.push(
      <div className="row" key={`row-${i}`}>
        {result}
      </div>
    );
  }

  return (
    // <Grid
    //   numRows={8}
    //   numCols={6}
    // />
    <div className="grid">{output}</div>
  );
}

export default App;
