import styles from './Grid.module.scss';
import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import GridHeader from './GridHeader';
import { useEffect, useRef, useState } from 'react';
import colData from '../../TestData/colData';
import objData from '../../TestData/objData';

export default function Grid() {
  // TBD: Grid Resizing
  const [headerData, setHeaderData] = useState(colData);
  const [recordData, setRecordData] = useState(objData.slice(29));
  const [rowData, setRowData] = useState(objData.slice(0, 29));
  const observerRef = useRef();

  /* 
  Observes the last element when the row data changes.
  Using threshold 0.01 because a high threshold value
  would never fire because of the potentially long horizontal axis.
  Instead, this will fire when a glimpse of the row is scrolled onto.

  NEED TO FIGURE OUT HOW TO SORT DATA ON OBSERVER CALLBACK
  */
  useEffect(() => {
    if (recordData.length === 0) return;
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0.02
    };

    const observerCallback = (entries) => {
      if (!entries) return;
      if (entries[0].isIntersecting) {
        if (recordData.length > 29) {
          setRowData([...rowData, recordData.slice(0, 29)]);
          setRecordData([]);
        } else {
          setRowData([...rowData, ...recordData]);
          setRecordData(recordData.slice(29));
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);

    const observerTarget = observerRef.current.lastChild;

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

  // passed to cells that support edit to fire an update on the grid. Required to ensure sorting works as expected
  // should probably move this data to a global state instead of storing it in a component...
  const updateGridData = (id, fieldName, newValue) => {
    const arrayIndex = rowData.findIndex((obj) => obj.id === id);
    setRowData([
      ...rowData.slice(0, arrayIndex),
      {
        ...rowData[arrayIndex],
        [fieldName]: { ...rowData[arrayIndex][fieldName], value: newValue }
      },
      ...rowData.slice(arrayIndex + 1)
    ]);
  };

  // maps data into the appropriate cell type based on the field's data type attribute
  const mappedRow = rowData
    ? rowData.map((row) => {
        const mappedRowData = headerData
          .filter((col) => col.display)
          .map((col) => {
            if (!col.display) return;
            if (!row[col.name])
              return <GridCell key={`${col.name}_${row.id}`} />;
            switch (true) {
              case col.name === 'id':
                return (
                  <GridCell key={`${col.name}_${row.id}`} textValue={row.id} />
                );
              case col.dataType === 'picklist':
                return (
                  <PicklistGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    options={row[col.name].options}
                    fieldData={{ objID: row.id, fieldName: col.name }}
                  />
                );
              case col.dataType === 'text':
                return (
                  <TextGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    fieldData={{ objID: row.id, fieldName: col.name }}
                    updateGridData={updateGridData}
                  />
                );
              default:
                return <GridCell textValue={row[col.name].value} />;
            }
          });
        return <GridRow key={row.id} gridCells={mappedRowData} />;
      })
    : null;

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid} ref={observerRef}>
        <GridHeader
          headerData={headerData}
          setHeaderData={setHeaderData}
          sortByField={sortByField}
        />
        {mappedRow}
      </div>
    </div>
  );
}
