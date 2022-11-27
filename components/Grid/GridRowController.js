import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import styles from './GridRowController.module.scss';
import GridAddRowDialog from './GridAddRowDialog';
import dataModel from '../../TestData/dataModel';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { useState, useEffect, useRef, useContext } from 'react';
import { GridContext } from '../../context/GridContext';

/*
  This grid controller handles the rendering, logic, and drag handlers for the grid rows.
  View more details on how it works by checking out the state and handler comments.
*/
export default function GridRowController(props) {
  const { gridData, dispatch } = useContext(GridContext);
  console.log(gridData);
  const [recordData, setRecordData] = useState(objData.slice(29));
  const [initializingRowPos, setInitializingRowPos] = useState();
  // In case of users dropping data on elements without an onDrop listener, revert the row back to it's original position
  const [backupRowData, setBackupRowData] = useState([...rowData]);
  // This controls the drag event handlers (non-drag start) to prevent overriding of column drag operations
  const [dragActive, setDragActive] = useState(false);
  // Controls render of the add row dialog
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();
  const loadingIconRef = useRef();

  // Updates frontend data when editing a cell in the row
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

  // DRAG AND DROP ROW LOGIC BELOW
  const startDragController = (startPos) => {
    setInitializingRowPos(startPos);
    setDragActive(true);
  };

  const moveRow = (curPos) => {
    if (initializingRowPos === curPos) return;
    const dataCopy = [...rowData];
    const startData = dataCopy.splice(initializingRowPos, 1)[0];
    dataCopy.splice(curPos, 0, startData);
    setInitializingRowPos(curPos);
    setRowData(dataCopy);
  };

  //we store the handle drag over to access the order from tempDragPos state. Pass to row component for execution
  const dragOverController = (order) => {
    moveRow(order);
  };

  // set temp drag pos to undefined since we no longer need it. set backup data to the current row data
  const dragDropController = () => {
    setInitializingRowPos();
    setBackupRowData(rowData);
  };

  // cancel and revert to previous row level. check if tempDragPos is undefined since the onDrop should fire first and set the state to undefined
  // If it's not undefined, that means the user likely did not end the drag operation on an element with an onDrop listener
  // hence we revert to the backup row data, set the tempDragPos to undefined
  const dragEndController = () => {
    setDragActive(false);
    if (setInitializingRowPos === undefined) return;
    setInitializingRowPos();
    setRowData(backupRowData);
  };

  /* 
  Observes the last element when the row data changes.
  Using threshold 0.01 due to horizontal width of the rows not fulfilling threshold conditions.
  Recreates the observer object and assigns its to new data whenever rowData (rendered rows) are updated.
  Instead of recreating the observer each time, could instead do some sort of observer target update
  for minor optimization.
  */
  useEffect(() => {
    // Don't recreate the observer if there are no records available
    if (recordData.length === 0) return;

    const observerTarget = observerRef.current.lastChild;
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0.02
    };

    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setTimeout(() => {
          if (recordData.length > 29) {
            setRowData([...rowData, ...recordData.slice(0, 29)]);
            setRecordData(recordData.slice(29));
          } else {
            setRowData([...rowData, ...recordData]);
            setRecordData([]);
          }
          setLoading(false);
        }, 2000);
      }
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(observerTarget);
    return () => observer.unobserve(observerTarget);
  }, [recordData]);

  // maps each col for each row and return it as a grid row
  const mappedRows = rowData
    ? rowData.map((row, index) => {
        const mappedRowData = headerData
          .filter((col) => col.display)
          .map((col) => {
            if (!col.display) return;
            if (!row[col.name])
              return <GridCell key={`${col.name}_${row.id}`} colInfo={col} />;
            switch (true) {
              case col.name === 'id':
                return (
                  <GridCell
                    key={`${col.name}_${row.id}`}
                    textValue={row.id}
                    colInfo={col}
                  />
                );
              case col.dataType === 'picklist':
                return (
                  <PicklistGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    fieldData={{
                      objID: row.id,
                      colInfo: col
                    }}
                    updateGridData={updateGridData}
                    options={row[col.name].options}
                  />
                );
              case col.dataType === 'text':
                return (
                  <TextGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    fieldData={{
                      objID: row.id,
                      colInfo: col
                    }}
                    updateGridData={updateGridData}
                  />
                );
              default:
                return <GridCell textValue={row[col.name].value} />;
            }
          });
        return (
          <GridRow
            key={row.id}
            gridCells={mappedRowData}
            startDragController={startDragController}
            dragOverController={dragOverController}
            dragDropController={dragDropController}
            dragEndController={dragEndController}
            moveRow={moveRow}
            order={index}
            isDragging={index === initializingRowPos}
            dragActive={dragActive}
          />
        );
      })
    : null;

  return (
    <div className={styles.gridRowController}>
      <div className={styles.gridRows} ref={observerRef}>
        {mappedRows}
      </div>
      <GridAddRowDialog gridDataModel={dataModel} />
      {loading && (
        <div className={styles.loadingBanner} ref={loadingIconRef}>
          <RotateRightIcon fontSize="large" />
        </div>
      )}
    </div>
  );
}
