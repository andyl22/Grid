import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import styles from './GridRowController.module.scss';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

/*
  This grid controller handles the rendering, logic, and drag handlers for the grid rows.
  View more details on how it works by checking out the state and handler comments.
*/
export default function GridRowController(props) {
  const { headerData, rowData, setRowData } = props;
  const [initializingRowPos, setInitializingRowPos] = useState();
  // In case of users dropping data on elements without an onDrop listener, revert the row back to it's original position
  const [backupRowData, setBackupRowData] = useState([...rowData]);
  // This controls the drag event handlers (non-drag start) to prevent overriding of column drag operations
  const [dragActive, setDragActive] = useState(false);

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

  // maps each col for each row and return it as a grid row
  const mappedRows = rowData
    ? rowData.map((row, index) => {
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
                    fieldData={{ objID: row.id, fieldName: col.name }}
                    updateGridData={updateGridData}
                    options={row[col.name].options}
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

  const addRow = () => {
    alert('Add Row');
  };

  return (
    <div className={styles.gridRowController}>
      {mappedRows}
      <button className={styles.addRowButton} onClick={addRow}>
        <AddIcon />
      </button>
    </div>
  );
}
