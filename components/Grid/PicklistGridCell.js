import styles from './PicklistGridCell.module.scss';
import { useState } from 'react';
import GridCell from './GridCell';

export default function PicklistGridCell(props) {
  const { initialGridValue, options } = props;
  const [gridValue, setGridValue] = useState(initialGridValue);

  const submitAction = () => {
    setGridValue(gridValue);
  };

  const changeHandler = (e) => {
    e.target.parentNode.dispatchEvent(
      new Event('submit', { cancelable: true, bubbles: true })
    );
    setGridValue(e.target.value);
  };

  const mappedOptions = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  const selectInput = (
    <select onChange={changeHandler} autoFocus defaultValue={initialGridValue}>
      {mappedOptions}
    </select>
  );

  return (
    <div className={styles.picklistCell}>
      <GridCell
        gridEditElement={selectInput}
        submitAction={submitAction}
        textValue={gridValue}
      />
    </div>
  );
}
