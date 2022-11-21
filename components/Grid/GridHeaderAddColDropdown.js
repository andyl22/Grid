import { useRef } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './GridHeaderAddColDropdown.module.scss';

export default function dropdownMenu(props) {
  const { headerData, setHeaderData } = props;
  const dropdownRef = useRef();

  const addColumn = (name) => {
    const indexOfCol = headerData.findIndex((col) => col.name === name);
    const copyOfHeaderData = [...headerData];
    const colData = copyOfHeaderData.splice(indexOfCol, 1)[0];
    colData.display = true;
    copyOfHeaderData.splice(indexOfCol, 0, colData);
    setHeaderData(copyOfHeaderData);
    setTimeout(() => {
      dropdownRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'start'
      });
    }, 200);
  };

  const columnOptions = headerData
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
