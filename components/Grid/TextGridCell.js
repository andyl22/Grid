import { useState } from 'react';
import GridCell from './GridCell';

export default function TextGridCell() {
  const [revertValue, setRevertValue] = useState('Test');
  const [gridValue, setGridValue] = useState('Test');

  const submitAction = () => {
    setRevertValue(gridValue);
  };

  // handle input change and modify state
  const handleChange = (e) => {
    setGridValue(e.target.value);
  };

  return (
    <GridCell
      gridEditElement={
        <input value={gridValue} onChange={handleChange} autoFocus />
      }
      cancelAction={() => setGridValue(revertValue)}
      submitAction={submitAction}
      textValue={gridValue}
    />
  );
}
