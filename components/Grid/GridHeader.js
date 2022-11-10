import styles from './GridHeader.module.scss';
import { useState } from 'react';
import HeaderCell from './HeaderCell';
import AddIcon from '@mui/icons-material/Add';

export default function GridHeader(props) {
  const { headerData, setHeaderData, sortByField } = props;
  const [backupHeaderData, setBackupHeaderData] = useState(headerData);
  const [tempDragPos, setTempDragPos] = useState();
  const [dragActive, setDragActive] = useState(false);

  /*  
    Store the start position, allowing users to start dragging.
    Modifies state from the grid using the setHeaderData function passed in props.
  */

  // Cut and splice data into a copy of the header data to re-order.
  // Set the header using the prop passed from the grid container.
  const dragOver = (curPos) => {
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
  };

  /* Restore to the original data pre-drag and drop initiation if tempDragPos
  because this indicates the drop was in an invalid zone, since dragDrop never fires */
  const dragEnd = () => {
    if (tempDragPos) {
      setHeaderData(backupHeaderData);
      setTempDragPos();
    }
  };

  // The grid header controls header cell rendering
  // Determination of which header cell is sorting the rows
  const [activeSort, setActiveSort] = useState();

  const updateActiveSort = (colName) => {
    setActiveSort(colName);
  };

  // cell management - add or delete columns
  const addColumn = () => {
    // allow user to select an available field to display
    // add modal with select options for cols that have !col.display
    alert(headerData.filter((col) => !col.display));
    const newColumn = {
      label: 'Test Six',
      name: 'testFieldSix',
      dataType: 'text',
      colWidth: '250px'
    };
    setHeaderData([...headerData, newColumn]);
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
        initDragOver={setTempDragPos}
        dragOver={dragOver}
        dragDrop={dragDrop}
        dragEnd={dragEnd}
        dragActive={dragActive}
        setDragActive={setDragActive}
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
