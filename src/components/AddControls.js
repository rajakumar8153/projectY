import React from 'react';

const AddControls = ({ addRow, addColumn, deleteRow, deleteColumn }) => (
  <div className="add-controls">
    <button onClick={addRow}>Add Row</button>
    <button onClick={addColumn}>Add Column</button>
    <button onClick={deleteRow}>Delete Row</button>
    <button onClick={deleteColumn}>Delete Column</button>
  </div>
);

export default AddControls;