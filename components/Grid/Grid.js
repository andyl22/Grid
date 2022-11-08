import styles from './Grid.module.scss';
import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import GridHeader from './GridHeader';
import { useState } from 'react';
import colData from '../../TestData/colData';
import objData from '../../TestData/objData';

export default function Grid() {
  // TBD: Grid Resizing
  const [headerData, setHeaderData] = useState(colData);

  const [rowData, setRowData] = useState(objData);

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
  const mappedRow = rowData.map((row) => {
    const mappedRowData = headerData.map((col) => {
      if (!row[col.name]) return <GridCell key={`${col.name}_${row.id}`} />;
      switch (true) {
        case col.name === 'id':
          return <GridCell key={`${col.name}_${row.id}`} textValue={row.id} />;
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
  });

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
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
