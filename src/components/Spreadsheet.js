// src/components/Spreadsheet.js
import React from 'react';
import Cell from './Cell';

const Spreadsheet = ({ rows, cols, handleCellClick, handleFormulaInput }) => (
  <div style={{ display: 'flex', overflow: 'auto' }}>
    <div id="row-numbers" className="row-numbers">
      <div className="header"></div> {/* Empty top-left corner */}
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="header">{i + 1}</div>
      ))}
    </div>
    <div className="grid">
      <div id="header-row" className="header-row" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 100px)` }}>
        {[...Array(cols)].map((_, i) => (
          <div key={i} className="header">{String.fromCharCode(65 + i)}</div>
        ))}
      </div>
      <div id="spreadsheet" className="spreadsheet" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 100px)`, gridAutoRows: '30px' }}>
        {[...Array(rows)].map((_, row) => (
          [...Array(cols)].map((_, col) => (
            <Cell
              key={`${row}-${col}`}
              row={row + 1}
              col={col}
              handleCellClick={handleCellClick}
              handleFormulaInput={handleFormulaInput}
            />
          ))
        ))}
      </div>
    </div>
  </div>
);

export default Spreadsheet;