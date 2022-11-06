import styles from './GridHeader.module.scss';
import { useState } from 'react';
import HeaderCell from './HeaderCell';

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

  // The grid header controls header cell rendering,
  // so the determination of which header cell is currently used for sorting is controlled here
  const [activeSort, setActiveSort] = useState(headerData[0].name);

  const updateActiveSort = (colName) => {
    setActiveSort(colName);
  };

  const mappedHeadercells = headerData.map((column, index) => (
    <HeaderCell
      fieldData={column}
      key={column.name}
      order={index}
      dragEnd={dragEnd}
      sortByField={sortByField}
      isSorting={activeSort === column.name}
      updateActiveSort={updateActiveSort}
    />
  ));

  return <div className={styles.headerRow}>{mappedHeadercells}</div>;
}
