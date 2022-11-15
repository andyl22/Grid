import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import { useState } from 'react';

export default function GridRowController(props) {
  const { headerData, rowData, setRowData } = props;
  const [tempDragPos, setTempDragPos] = useState();
  const [backupRowData, setBackupRowData] = useState([...rowData]);

  // move row manually
  const moveRow = (oldPos, newPos) => {
    if (oldPos === newPos) return;
    const dataCopy = [...rowData];
    const startData = dataCopy.splice(tempDragPos, 1)[0];
    dataCopy.splice(newPos, 0, startData);
    setTempDragPos(newPos);
    setRowData(dataCopy);
    // setRowData([...rowData].splice(newPos, 0, draggingRowData));
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

  const startDragController = (startPos) => {
    setTempDragPos(startPos);
  };

  //we store the handle drag over to access the order from tempDragPos state. Pass to row component for execution
  const dragOverController = (order) => {
    moveRow(tempDragPos, order);
  };

  // set temp drag pos to undefined since we no longer need it. set backup data to the current row data
  const dragDropController = () => {
    setTempDragPos();
    setBackupRowData(rowData);
  };

  // cancel and revert to previous row level. check if temp drag pos is undefined because it should be, if drop was executed (successful drop)
  const dragEndController = () => {
    if (tempDragPos === undefined) {
      setTempDragPos();
      return;
    }
    setRowData(backupRowData);
  };

  // maps data into the appropriate cell type based on the field's data type attribute
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
          />
        );
      })
    : null;

  return mappedRows;
}
