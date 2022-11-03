import { useState } from 'react';
import GridCell from './GridCell';

export default function PicklistGridCell(props) {
  const { initialGridValue } = props;
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

  const selectInput = (
    <select onChange={changeHandler} autoFocus>
      <option value="Test 1">
        Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1 Test 1
      </option>
      <option value="Test 2">Test 2</option>
      <option value="Test 3">Test 3</option>
      <option value="Test 4">Test 4</option>
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
