import { range } from "./utils";

// eslint-disable-next-line react/prop-types
function Grid({ numRows, numCols }) {
  const gridRow = range(numRows).map((indexRow) => {
    const rowCell = range(numCols).map((indexCol) => (
      <div key={indexCol} className="cell"></div>
    ));

    return (
      <div key={indexRow} className="row">
        {rowCell}
      </div>
    );
  });

  return <div className="grid">{gridRow}</div>;
}

// function Grid({ numRows, numCols }) {
//   return <div className="grid">{/* TODO */}</div>;
// }

export default Grid;
