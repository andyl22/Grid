import { useRef, useContext, useEffect } from 'react';
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
    const maxOrder = colData.map((col) => col.order).sort((a, b) => b - a)[0];
    copyOfHeaderData[indexOfCol].order = maxOrder + 1000;
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
    .filter((col) => !col.order)
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

  useEffect(() => {
    dropdownRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start'
    });
  }, []);

  return (
    <Dropdown>
      <div className={styles.optionsContainer} ref={dropdownRef}>
        {columnOptions.length > 0 ? columnOptions : <p>No options available</p>}
      </div>
    </Dropdown>
  );
}
