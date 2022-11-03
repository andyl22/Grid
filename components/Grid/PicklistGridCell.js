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
    <select onChange={changeHandler} autoFocus>
      {mappedOptions}
    </select>
  );

  return (
    <GridCell
      gridEditElement={selectInput}
      submitAction={submitAction}
      textValue={gridValue}
    />
  );
}
