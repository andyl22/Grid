import { useState } from 'react';
import GridCell from './GridCell';

export default function TextGridCell() {
  const [gridValue, setGridValue] = useState('Test');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // handle input change and modify state
  const handleChange = (e) => {
    setGridValue(e.target.value);
  };

  return (
    <GridCell
      gridEditElement={
        <form onSubmit={handleSubmit}>
          <input value={gridValue} onChange={handleChange} />
        </form>
      }
      cancelAction={() => console.log('test')}
      submitAction={() => console.log('test')}
      textValue={gridValue}
    />
  );
}
