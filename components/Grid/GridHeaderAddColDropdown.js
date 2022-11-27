import { useRef, useContext } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './GridHeaderAddColDropdown.module.scss';
import { GridContext } from '../../context/GridContext';

export default function dropdownMenu() {
  const { gridData, dispatch } = useContext(GridContext);
  const { colData } = gridData;
  const dropdownRef = useRef();

  const addColumn = (name) => {
    const indexOfCol = colData.findIndex((col) => col.name === name);
    const copyOfHeaderData = [...colData];
    const columnToAdd = copyOfHeaderData.splice(indexOfCol, 1)[0];
    columnToAdd.display = true;
    copyOfHeaderData.splice(indexOfCol, 0, columnToAdd);
    dispatch({
      type: 'UPDATECOL',
      payload: { updatedColData: copyOfHeaderData }
    });
    setTimeout(() => {
      dropdownRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start'
      });
    }, 200);
  };

  const columnOptions = colData
    .filter((col) => !col.display)
    .map((col) => {
      return (
        <div
          key={col.name}
          className={styles.option}
          onClick={() => addColumn(col.name)}
        >
          <p>{col.label}</p>
        </div>
      );
    });

  return (
    <Dropdown>
      <div className={styles.optionsContainer} ref={dropdownRef}>
        {columnOptions.length > 0 ? columnOptions : <p>No options available</p>}
      </div>
    </Dropdown>
  );
}
