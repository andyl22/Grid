import styles from './Grid.module.scss';
import GridHeader from './GridHeader';
import { useEffect, useState } from 'react';
import GridRowController from './GridRowController';
export default function Grid(props) {
  // TBD: Grid Resizing
  const { colData, objData } = props;
  const [headerData, setHeaderData] = useState(colData);
  const [rowData, setRowData] = useState(objData.slice(0, 29));

  // Pass initial data to render
  useEffect(() => {
    // setRecordData(recordData.slice(29));
    // setRowData(recordData.slice(0, 29));
  }, []);

  // passed to header cells to fire a sort operation onClick
  const sortByField = (fieldName, ascending) => {
    setRowData([
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
    ]);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        <GridHeader
          headerData={headerData}
          setHeaderData={setHeaderData}
          sortByField={sortByField}
        />
        <GridRowController
          rowData={rowData}
          objData={objData}
          setRowData={setRowData}
          headerData={headerData}
        />
      </div>
    </div>
  );
}
