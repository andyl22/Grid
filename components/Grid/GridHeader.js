import styles from './GridHeader.module.scss';
import { useState } from 'react';
import HeaderCell from './HeaderCell';
import AddIcon from '@mui/icons-material/Add';

export default function GridHeader(props) {
  const { headerData, setHeaderData, sortByField } = props;

  /*  
    Store the start position, allowing users to start dragging.
    Modifies state from the grid using the setHeaderData function passed in props.
  */

  // Cut and splice data into a copy of the header data to re-order.
  // Set the header using the prop passed from the grid container.
  const dragEnd = (e, endPos) => {
    const startPos = e.dataTransfer.getData('text/plain');
    const dataCopy = [...headerData];
    const startData = dataCopy.splice(startPos, 1)[0];
    dataCopy.splice(endPos, 0, startData);
    setHeaderData(dataCopy);
  };

  // The grid header controls header cell rendering
  // Determination of which header cell is sorting the rows
  const [activeSort, setActiveSort] = useState(headerData[0].name);

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
        dragEnd={dragEnd}
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
