import styles from './Grid.module.scss';
import GridHeader from './GridHeader';
import { useEffect, useRef, useState } from 'react';
import GridRowController from './GridRowController';

export default function Grid(props) {
  // TBD: Grid Resizing
  const { colData, objData } = props;
  const [headerData, setHeaderData] = useState(colData);
  const [recordData, setRecordData] = useState(objData.slice(29));
  const [rowData, setRowData] = useState(objData.slice(0, 29));
  const observerRef = useRef();

  /* 
  Observes the last element when the row data changes.
  Using threshold 0.01 due to horizontal width of the rows not fulfilling threshold conditions.
  Recreates the observer object and assigns its to new data whenever rowData (rendered rows) are updated.
  Instead of recreating the observer each time, could instead do some sort of observer target update
  for minor optimization.
  */
  useEffect(() => {
    if (!recordData) return;
    // Don't recreate the observer if there are no records available
    if (recordData.length === 0) return;
    const observerTarget =
      observerRef.current.lastChild.children[
        [observerRef.current.lastChild.children.length - 4]
      ];
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0.02
    };

    const observerCallback = (entries) => {
      console.log('fires', observerTarget);
      if (entries[0].isIntersecting) {
        if (recordData.length > 29) {
          setRowData([...rowData, ...recordData.slice(0, 29)]);
          setRecordData(recordData.slice(29));
        } else {
          setRowData([...rowData, ...recordData]);
          setRecordData([]);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(observerTarget);
    return () => observer.unobserve(observerTarget);
  }, [rowData]);

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
      <div className={styles.grid} ref={observerRef}>
        <GridHeader
          headerData={headerData}
          setHeaderData={setHeaderData}
          sortByField={sortByField}
        />
        <GridRowController
          rowData={rowData}
          setRowData={setRowData}
          headerData={headerData}
        />
      </div>
    </div>
  );
}
