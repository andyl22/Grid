import styles from './TextGridCell.module.scss';
import { useState } from 'react';
import GridCell from './GridCell';

export default function TextGridCell(props) {
  const { initialGridValue, updateGridData, cellData, cellColData } = props;
  const [revertValue, setRevertValue] = useState('Test');
  const [gridValue, setGridValue] = useState(initialGridValue);

  const submitAction = () => {
    updateGridData(cellData.id, cellData.name, gridValue);
    setRevertValue(gridValue);
  };

  // handle input change and modify state
  const handleChange = (e) => {
    setGridValue(e.target.value);
  };

  return (
    <div className={styles.textCell}>
      <GridCell
        gridEditElement={
          <input value={gridValue} onChange={handleChange} autoFocus />
        }
        cancelAction={() => setGridValue(revertValue)}
        submitAction={submitAction}
        readValue={gridValue}
        cellColData={cellColData}
      />
    </div>
  );
}
