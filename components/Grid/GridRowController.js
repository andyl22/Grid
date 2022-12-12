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
export default function GridRowController() {
  const { gridData, dispatch } = useContext(GridContext);
  const { objData, rowData, colData } = gridData;
  // const [recordData, setRecordData] = useState(objData.slice(29));
  const [initializingRowPos, setInitializingRowPos] = useState();
  // In case of users dropping data on elements without an onDrop listener, revert the row back to it's original position
  const [backupRowData, setBackupRowData] = useState([...rowData]);
  // This controls the drag event handlers (non-drag start) to prevent overriding of column drag operations
  const [dragActive, setDragActive] = useState(false);
  // Controls render of the add row dialog
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();
  const loadingIconRef = useRef();

  // Updates context data when editing a cell in the row
  const updateGridData = (id, fieldName, newValue) => {
    const arrayIndex = rowData.findIndex((obj) => obj.id === id);
    console.log(fieldName);
    dispatch({
      type: 'UPDATEROW',
      payload: {
        updatedRowData: [
          ...rowData.slice(0, arrayIndex),
          {
            ...rowData[arrayIndex],
            [fieldName]: { ...rowData[arrayIndex][fieldName], value: newValue }
          },
          ...rowData.slice(arrayIndex + 1)
        ]
      }
    });
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
    dispatch({ type: 'UPDATEROW', payload: { updatedRowData: dataCopy } });
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
    dispatch({ type: 'UPDATEROW', payload: { updatedRowData: backupRowData } });
  };

  /* 
  Observes the last element when the row data changes.
  Using threshold 0.01 due to horizontal width of the rows not fulfilling threshold conditions.
  Recreates the observer object and assigns its to new data whenever rowData (rendered rows) are updated.
  Instead of recreating the observer each time, could instead do some sort of observer target update
  for minor optimization.
  */
  useEffect(() => {
    if (objData.length === 0) return;
    const observerTarget = observerRef.current.lastChild;
    const options = {
      root: null,
      rootMargin: '5px',
      threshold: 0.02
    };

    const observerCallback = async (entries) => {
      // Don't execute if the observer is not intersecting
      if (!entries[0].isIntersecting) return;
      setLoading(true);
      const wait = () =>
        new Promise((resolve) => {
          setTimeout(() => resolve('OK'), 1500);
        });
      await wait();
      dispatch({ type: 'LOADRECORDS' });
      setLoading(false);
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(observerTarget);
    return () => observer.unobserve(observerTarget);
  }, [rowData]);

  // maps each col for each row and return it as a grid row
  const mappedRows = rowData
    ? rowData.map((row, index) => {
        const mappedRowData = colData
          .filter((col) => col.order)
          .sort((a, b) => a.order - b.order)
          .map((col) => {
            if (!row[col.name])
              return (
                <GridCell
                  key={`${col.name}_${row.id}`}
                  cellData={row}
                  cellColData={col}
                />
              );
            switch (true) {
              case col.name === 'id':
                return (
                  <GridCell
                    key={`${col.name}_${row.id}`}
                    readValue={row.id}
                    cellData={row}
                    cellColData={col}
                  />
                );
              case col.dataType === 'picklist':
                return (
                  <PicklistGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    cellData={row}
                    cellColData={col}
                    updateGridData={updateGridData}
                    options={row[col.name].options}
                  />
                );
              case col.dataType === 'text':
                return (
                  <TextGridCell
                    key={`${col.name}_${row.id}`}
                    initialGridValue={row[col.name].value}
                    cellData={row}
                    cellColData={col}
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
