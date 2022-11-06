import styles from './Grid.module.scss';
import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import GridHeader from './GridHeader';
import { useState } from 'react';

export default function Grid() {
  /*
    Grid shouuld support:
      4. Data should display data in the correct columns, first and foremost
      1. Reordering
      2. Resizing
      3. Sorting
  */
  const [headerData, setHeaderData] = useState([
    {
      label: 'ID',
      name: 'id',
      dataType: 'text',
      colWidth: '200px'
    },
    {
      label: 'Test One',
      name: 'testFieldOne',
      dataType: 'text',
      colWidth: '200px'
    },
    {
      label: 'Test Two',
      name: 'testFieldTwo',
      dataType: 'picklist',
      colWidth: '300px'
    },
    {
      label: 'Test Three',
      name: 'testFieldThree',
      dataType: 'text',
      colWidth: '250px'
    },
    {
      label: 'Test Four',
      name: 'testFieldFour',
      dataType: 'text',
      colWidth: '250px'
    },
    {
      label: 'Test Five',
      name: 'testFieldFive',
      dataType: 'text',
      colWidth: '250px'
    },
    {
      label: 'Test Six',
      name: 'testFieldSix',
      dataType: 'text',
      colWidth: '250px'
    }
  ]);

  const [rowData, setRowData] = useState([
    {
      id: 4,
      testFieldOne: { value: 'Test 1-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 1-2',
        dataType: 'picklist',
        options: ['Not a Test', 'Test 1-2', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 1-3', dataType: 'text' },
      testFieldFour: { value: 'Test 1-3', dataType: 'text' },
      testFieldFive: { value: 'Test 1-3', dataType: 'text' },
      testFieldSix: { value: 'Test 1-3', dataType: 'text' }
    },
    {
      id: 2,
      testFieldOne: { value: 'Test 2-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 2-2',
        dataType: 'picklist',
        options: ['Test 2-2', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 2-3', dataType: 'text' },
      testFieldFour: { value: 'Test 2-4', dataType: 'text' },
      testFieldFive: { value: 'Test 2-5', dataType: 'text' },
      testFieldSix: { value: 'Test 2-6', dataType: 'text' }
    },
    {
      id: 3,
      testFieldOne: { value: 'Test 3-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 3-2',
        dataType: 'picklist',
        options: ['Test 3-2', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldFour: { value: 'Test 3-3', dataType: 'text' },
      testFieldFive: { value: 'Test 3-4', dataType: 'text' },
      testFieldSix: { value: 'Test 3-5', dataType: 'text' }
    }
  ]);

  const sortByField = (fieldName, ascending) => {
    setRowData([
      ...rowData.sort((a, b) => {
        if (!a[fieldName]) return -1;
        if (!b[fieldName]) return 1;
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

  const mappedRow = rowData.map((row) => {
    const mappedRowData = headerData.map((col) => {
      if (!row[col.name]) return <GridCell key={`${col.name}_${row.id}`} />;
      switch (true) {
        case col.dataType === 'picklist':
          return (
            <PicklistGridCell
              key={`${col.name}_${row.id}`}
              initialGridValue={row[col.name].value}
              options={row[col.name].options}
            />
          );
        case col.dataType === 'text':
          return (
            <TextGridCell
              key={`${col.name}_${row.id}`}
              initialGridValue={row[col.name].value || row.id}
            />
          );
        default:
          return;
      }
    });
    return <GridRow key={row.id} gridCells={mappedRowData} />;
  });

  return (
    <div className={styles.gridContainer}>
      <GridHeader
        headerData={headerData}
        setHeaderData={setHeaderData}
        sortByField={sortByField}
      />
      {mappedRow}
    </div>
  );
}
