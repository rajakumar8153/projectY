// src/components/Cell.js
import React from 'react';

const Cell = ({ row, col, handleCellClick, handleFormulaInput }) => (
    <div
      className="cell"
      contentEditable
      data-row={row}
      data-col={String.fromCharCode(65 + col)}
      onClick={handleCellClick}
      onKeyDown={handleFormulaInput}
      style={{ textAlign: 'center', lineHeight: '30px' }}
    />
  );
  

export default Cell;