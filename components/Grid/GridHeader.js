import styles from './GridHeader.module.scss';
import { useState } from 'react';
import HeaderCell from './HeaderCell';
import AddIcon from '@mui/icons-material/Add';

export default function GridHeader(props) {
  const { headerData, setHeaderData, sortByField } = props;
  const [backupHeaderData, setBackupHeaderData] = useState(headerData);
  const [tempDragPos, setTempDragPos] = useState();
  const [dragActive, setDragActive] = useState(false);
  const [activeSort, setActiveSort] = useState();

  /*  
    Store the start position, allowing users to start dragging.
    Modifies state from the grid using the setHeaderData function passed in props.
  */

  const dragStart = (order) => {
    setTempDragPos(order);
    setDragActive(true);
  };

  // Cut and splice data into a copy of the header data to re-order.
  // Set the header using the prop passed from the grid container.
  const moveHeader = (curPos) => {
    if (tempDragPos === curPos) return;
    const dataCopy = [...headerData];
    const startData = dataCopy.splice(tempDragPos, 1)[0];
    dataCopy.splice(curPos, 0, startData);
    setTempDragPos(curPos);
    setHeaderData(dataCopy);
  };

  /* Drag end will fire first and clear the temp drag position 
  as long as the drag drop is on a valid position. */
  const dragDrop = () => {
    setTempDragPos();
    setBackupHeaderData(headerData);
    setDragActive(false);
  };

  /* Restore to the original data pre-drag and drop initiation if tempDragPos
  because this indicates the drop was in an invalid zone, since dragDrop never fires */
  const checkDropSuccess = () => {
    if (tempDragPos) {
      setHeaderData(backupHeaderData);
      setTempDragPos();
    }
  };

  // The grid header controls header cell rendering
  // Determination of which header cell is sorting the rows

  const updateActiveSort = (colName) => {
    setActiveSort(colName);
  };

  // cell management - add or delete columns
  const addColumn = () => {
    // allow user to select an available field to display
    // add modal with select options for cols that have !col.display
    console.log(headerData.filter((col) => !col.display));
    // setHeaderData([...headerData, newColumn]);
  };

  const deleteColumn = (index) => {
    setHeaderData([...headerData].splice(index, 1));
  };

  const mappedHeadercells = headerData
    .filter((column) => column.display)
    .map((column, index) => (
      <HeaderCell
        fieldData={column}
        key={column.name}
        order={index}
        dragStart={dragStart}
        dragEnter={moveHeader}
        dragDrop={dragDrop}
        dragEnd={checkDropSuccess}
        isDragging={tempDragPos === index}
        dragActive={dragActive}
        sortByField={sortByField}
        isSorting={activeSort === column.name}
        updateActiveSort={updateActiveSort}
        deleteColumn={deleteColumn}
      />
    ));

  return (
    <div className={styles.headerRow}>
      {mappedHeadercells}
      <button className={styles.addColButton} onClick={addColumn}>
        <AddIcon />
      </button>
    </div>
  );
}
