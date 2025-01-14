// src/App.js
import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';
import AddControls from './components/AddControls';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(10);

  const addRow = () => setRows(rows + 1);
  const addColumn = () => setCols(cols + 1);
  const deleteRow = () => rows > 1 && setRows(rows - 1);
  const deleteColumn = () => cols > 1 && setCols(cols - 1);

  const applyFormat = (formatType) => {
    const activeCell = document.querySelector('.cell.active');
    if (activeCell) {
      switch (formatType) {
        case 'bold':
          activeCell.style.fontWeight = activeCell.style.fontWeight === 'bold' ? 'normal' : 'bold';
          break;
        case 'italic':
          activeCell.style.fontStyle = activeCell.style.fontStyle === 'italic' ? 'normal' : 'italic';
          break;
        case 'uppercase':
          activeCell.innerText = activeCell.innerText.toUpperCase();
          break;
        case 'lowercase':
          activeCell.innerText = activeCell.innerText.toLowerCase();
          break;
        default:
          break;
      }
    }
  };

  const removeDuplicates = () => {
    const cells = document.querySelectorAll('.cell');
    const seenValues = new Set();

    cells.forEach(cell => {
      const cellValue = cell.innerText.trim();
      if (cellValue && seenValues.has(cellValue)) {
        cell.innerText = '';
      } else {
        seenValues.add(cellValue);
      }
    });
  };

  const findAndReplace = () => {
    const findText = prompt('Enter the text to find:');
    const replaceText = prompt('Enter the text to replace with:');

    if (findText !== null && replaceText !== null) {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        if (cell.innerText.trim() === findText) {
          cell.innerText = replaceText;
        }
      });
    }
  };

  const handleFormulaInput = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const cell = event.target;
      const formula = cell.innerText.trim();
  
      if (formula.startsWith('=')) {
        try {
          // Parse formula and extract function and range
          const match = formula.match(/^=(\w+)\((\w+\d+):(\w+\d+)\)$/);
          if (match) {
            const [_, func, start, end] = match;
            const startRow = parseInt(start.match(/\d+/)[0], 10) - 1;
            const startCol = start.charCodeAt(0) - 65;
            const endRow = parseInt(end.match(/\d+/)[0], 10) - 1;
            const endCol = end.charCodeAt(0) - 65;
  
            // Collect values from the range
            const values = [];
            for (let r = startRow; r <= endRow; r++) {
              for (let c = startCol; c <= endCol; c++) {
                const targetCell = document.querySelector(
                  `.cell[data-row="${r + 1}"][data-col="${String.fromCharCode(65 + c)}"]`
                );
                if (targetCell) {
                  const value = parseFloat(targetCell.innerText.trim());
                  if (!isNaN(value)) values.push(value);
                }
              }
            }
  
            // Apply the function
            let result;
            switch (func.toUpperCase()) {
              case 'SUM':
                result = values.reduce((a, b) => a + b, 0);
                break;
              case 'AVERAGE':
                result = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
                break;
              case 'MAX':
                result = Math.max(...values);
                break;
              case 'MIN':
                result = Math.min(...values);
                break;
              case 'COUNT':
                result = values.length;
                break;
              default:
                throw new Error('Unknown function');
            }
  
            // Set the result
            cell.innerText = result;
          } else {
            throw new Error('Invalid formula format');
          }
        } catch (error) {
          cell.innerText = 'ERROR';
        }
      }
    }
  };
  

  const handleCellClick = (event) => {
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('active'));
    event.target.classList.add('active');
  };

  return (
    <div id="app">
      <Toolbar applyFormat={applyFormat} removeDuplicates={removeDuplicates} findAndReplace={findAndReplace} />
      <Spreadsheet rows={rows} cols={cols} handleCellClick={handleCellClick} handleFormulaInput={handleFormulaInput} />
      <AddControls addRow={addRow} addColumn={addColumn} deleteRow={deleteRow} deleteColumn={deleteColumn} />
    </div>
  );
};

export default App;