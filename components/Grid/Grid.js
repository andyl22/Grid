import styles from './Grid.module.scss';
import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';
import GridHeader from './GridHeader';

export default function Grid() {
  /*
    Grid shouuld support:
      4. Data should display data in the correct columns, first and foremost
      1. Reordering
      2. Resizing
      3. Sorting
  */
  const headerData = [
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
    }
  ];

  const rowData = [
    {
      id: 1,
      testFieldOne: { value: 'Test 1-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 1-2',
        dataType: 'picklist',
        options: ['Not a Test', 'Test 1-2', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 1-3', dataType: 'text' }
    },
    {
      id: 2,
      testFieldOne: { value: 'Test 2-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 2-2',
        dataType: 'picklist',
        options: ['Test 2-2', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 2-3', dataType: 'text' }
    },
    {
      id: 3,
      testFieldOne: { value: 'Test 3-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 3-2',
        dataType: 'picklist',
        options: ['Test 3-2', 'Not a Test', 'Picklist Stuff', 'Hello World']
      }
    }
  ];

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
              initialGridValue={row[col.name].value}
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
      <GridHeader headerData={headerData} />
      {mappedRow}
    </div>
  );
}
