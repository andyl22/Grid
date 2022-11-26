import styles from './PicklistGridCell.module.scss';
import { useState } from 'react';
import GridCell from './GridCell';

export default function PicklistGridCell(props) {
  const { initialGridValue, fieldData, updateGridData, options } = props;
  const [gridValue, setGridValue] = useState(initialGridValue);

  const submitAction = () => {
    updateGridData(fieldData.objID, fieldData.fieldName, gridValue);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    setGridValue(e.target.value);
    e.target.parentNode.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true })
    );
  };

  const mappedOptions = options.map((option) => (
    <option key={option} value={option} disabled={option === gridValue}>
      {option}
    </option>
  ));

  const selectInput = (
    <select onChange={changeHandler} autoFocus>
      {mappedOptions}
    </select>
  );

  return (
    <div className={styles.picklistCell}>
      <GridCell
        gridEditElement={selectInput}
        submitAction={submitAction}
        textValue={gridValue}
        colWidth={fieldData.colWidth}
      />
    </div>
  );
}
