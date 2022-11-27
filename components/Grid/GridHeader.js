import styles from './GridHeader.module.scss';
import HeaderCell from './HeaderCell';
import AddIcon from '@mui/icons-material/Add';
import GridHeaderAddColDropdown from './GridHeaderAddColDropdown';
import { useState, useContext } from 'react';

import { GridContext } from '../../context/GridContext';

export default function GridHeader() {
  const { gridData, dispatch } = useContext(GridContext);
  const { rowData, colData } = gridData;
  const [backupHeaderData, setBackupHeaderData] = useState(colData);
  const [tempDragPos, setTempDragPos] = useState();
  const [dragActive, setDragActive] = useState(false);
  const [activeSort, setActiveSort] = useState();
  const [showDropdown, setShowDropdown] = useState(false);

  // passed to header cells to fire a sort operation onClick
  const sortByField = (fieldName, ascending) => {
    dispatch({
      type: 'UPDATEROW',
      payload: {
        updatedRowData: [
          ...rowData.sort((a, b) => {
            if (!a[fieldName]) return 1;
            if (!b[fieldName]) return -1;
            const fieldOne = fieldName === 'id' ? a.id : a[fieldName].value;
            const fieldTwo = fieldName === 'id' ? b.id : b[fieldName].value;
            if (fieldOne === fieldTwo) return 0;
            if (ascending) {
              return fieldOne < fieldTwo ? 1 : -1;
            } else {
              return fieldOne > fieldTwo ? 1 : -1;
            }
          })
        ]
      }
    });
  };

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
    const dataCopy = [...colData];
    const startData = dataCopy.splice(tempDragPos, 1)[0];
    dataCopy.splice(curPos, 0, startData);
    setTempDragPos(curPos);
    dispatch({ type: 'UPDATECOL', payload: { updatedColData: dataCopy } });
  };

  /* Drag end will fire first and clear the temp drag position 
  as long as the drag drop is on a valid position. */
  const dragDrop = () => {
    setTempDragPos();
    setBackupHeaderData(colData);
    setDragActive(false);
  };

  /* Restore to the original data pre-drag and drop initiation if tempDragPos
  because this indicates the drop was in an invalid zone, since dragDrop never fires */
  const checkDropSuccess = () => {
    if (tempDragPos) {
      dispatch({
        type: 'UPDATECOL',
        payload: { updatedColData: backupHeaderData }
      });
      setTempDragPos();
    }
  };

  // The grid header controls header cell rendering
  // Determination of which header cell is sorting the rows

  const updateActiveSort = (colName) => {
    setActiveSort(colName);
  };

  // cell management - add or delete columns
  const addColumns = () => {
    // allow user to select an available field to display
    // add modal with select options for cols that have !col.display
    setShowDropdown(!showDropdown);
  };

  const deleteColumn = (index) => {
    dispatch({
      type: 'UPDATECOL',
      payload: { updatedColData: [...colData].splice(index, 1) }
    });
  };

  const mappedHeadercells = colData
    .filter((column) => column.display)
    .map((column, index) => (
      <HeaderCell
        cellColData={column}
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
      <div className={styles.dropdownWrapper}>
        <button className={styles.addColButton} onClick={addColumns}>
          <AddIcon />
        </button>
        {showDropdown ? <GridHeaderAddColDropdown /> : null}
      </div>
    </div>
  );
}
