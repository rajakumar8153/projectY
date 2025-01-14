// src/components/Toolbar.js
import React from 'react';

const Toolbar = ({ applyFormat, removeDuplicates, findAndReplace }) => (
  <div className="toolbar">
    <button onClick={() => applyFormat('bold')}>Bold</button>
    <button onClick={() => applyFormat('italic')}>Italic</button>
    <button onClick={() => applyFormat('uppercase')}>Uppercase</button>
    <button onClick={() => applyFormat('lowercase')}>Lowercase</button>
    <button onClick={removeDuplicates}>Remove Duplicates</button>
    <button onClick={findAndReplace}>Find & Replace</button>
  </div>
);

export default Toolbar;