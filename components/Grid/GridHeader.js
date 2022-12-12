import styles from './GridHeader.module.scss';
import HeaderCell from './HeaderCell';
import AddIcon from '@mui/icons-material/Add';
import GridHeaderAddColDropdown from './GridHeaderAddColDropdown';
import { useState, useContext, useEffect } from 'react';

import { GridContext } from '../../context/GridContext';

export default function GridHeader() {
  const { gridData, dispatch } = useContext(GridContext);
  const { rowData, colData } = gridData;
  const [backupHeaderData, setBackupHeaderData] = useState();
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
  const moveHeader = async (curPos) => {
    if (tempDragPos === curPos) return;
    const dataCopy = [...colData];
    const filteredDataCopy = dataCopy
      .filter((col) => col.order)
      .sort((a, b) => a.order - b.order);
    const tempDragIndex = dataCopy.findIndex(
      (col) => col.order === tempDragPos
    );
    const curIndex = filteredDataCopy.findIndex((col) => col.order === curPos);
    const tempDragCol = dataCopy[tempDragIndex];
    const currentCol = filteredDataCopy[curIndex];
    const leftCol = filteredDataCopy[curIndex - 1];
    const rightCol = filteredDataCopy[curIndex + 1];
    let newOrder;
    if (!rightCol) {
      newOrder = currentCol.order + 1000;
      tempDragCol.order = newOrder;
      setTempDragPos(newOrder);
    } else if (!leftCol) {
      newOrder = currentCol.order - 1000;
      tempDragCol.order = newOrder;
      setTempDragPos(newOrder);
    } else if (tempDragPos >= rightCol.order) {
      newOrder = (leftCol.order + currentCol.order) / 2;
      tempDragCol.order = newOrder;
      setTempDragPos(newOrder);
    } else {
      newOrder = (rightCol.order + currentCol.order) / 2;
      tempDragCol.order = newOrder;
      setTempDragPos(newOrder);
    }
    dispatch({ type: 'UPDATECOL', payload: { updatedColData: dataCopy } });
  };

  /* Drag end will fire first and clear the temp drag position 
  as long as the drag drop is on a valid position. */
  const dragDrop = () => {
    setTempDragPos();
    setBackupHeaderData([...colData]);
    setDragActive(false);
  };

  useEffect(() => {
    if (dragActive) {
      setBackupHeaderData(JSON.parse(JSON.stringify(colData)));
    } else {
      setBackupHeaderData(undefined);
    }
  }, [dragActive]);

  /* Restore to the original data pre-drag and drop initiation if tempDragPos
  because this indicates the drop was in an invalid zone, since dragDrop never fires */
  const checkDropSuccess = async () => {
    if (tempDragPos !== undefined) {
      setTempDragPos(undefined);
      setDragActive(false);
      await dispatch({
        type: 'UPDATECOL',
        payload: { updatedColData: backupHeaderData }
      });
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

  const deleteColumn = (order) => {
    const copyOfHeaderData = [...colData];
    const colIndex = copyOfHeaderData.findIndex((col) => col.order === order);
    copyOfHeaderData[colIndex].order = undefined;
    dispatch({
      type: 'UPDATECOL',
      payload: { updatedColData: copyOfHeaderData }
    });
  };

  const mappedHeadercells = colData
    .filter((column) => column.order)
    .sort((a, b) => a.order - b.order)
    .map((column) => (
      <HeaderCell
        cellColData={column}
        key={column.name}
        order={column.order}
        dragStart={dragStart}
        dragEnter={moveHeader}
        dragDrop={dragDrop}
        dragEnd={checkDropSuccess}
        isDragging={tempDragPos === column.order}
        dragActive={dragActive}
        sortByField={sortByField}
        isSorting={activeSort === column.name}
        updateActiveSort={updateActiveSort}
        deleteColumn={deleteColumn}
        tempDragPos={tempDragPos}
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
