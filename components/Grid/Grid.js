import styles from './Grid.module.scss';
import GridRow from './GridRow';
import GridCell from './GridCell';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';

export default function Grid() {
  /*
    Grid shouuld support:
      4. Data should display data in the correct columns, first and foremost
      1. Reordering
      2. Resizing
      3. Sorting
  */
  const columnData = [
    { label: 'Test One', name: 'testFieldOne', colWidth: '200px' },
    { label: 'Test Two', name: 'testFieldTwo', colWidth: '300px' },
    { label: 'Test Three', name: 'testFieldThree', colWidth: '250px' }
  ];

  const rowData = [
    {
      id: 1,
      testFieldOne: { value: 'Test 1-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 1-2',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 1-3', dataType: 'text' }
    },
    {
      id: 2,
      testFieldOne: { value: 'Test 2-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 2-2',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 2-3', dataType: 'text' }
    },
    {
      id: 3,
      testFieldOne: { value: 'Test 3-1', dataType: 'text' },
      testFieldTwo: {
        value: 'Test 3-2',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test 3-3', dataType: 'text' }
    }
  ];

  const mappedRow = rowData.map((row) => {
    const mappedRowData = columnData.map((col) => {
      switch (row[col.name].dataType) {
        case 'picklist':
          return (
            <PicklistGridCell
              key={`${col.name}_${row.id}`}
              initialGridValue={row[col.name].value}
            />
          );
        case 'text':
          return (
            <TextGridCell
              key={`${col.name}_${row.id}`}
              initialGridValue={row[col.name].value}
            />
          );
        default:
          console.log(row);
          return;
      }
    });
    return <GridRow key={row.id} gridCells={mappedRowData} />;
  });

  const headerRow = columnData.map((column) => {
    return (
      <GridCell
        className={styles.columnHeader}
        key={column.name}
        textValue={column.name}
      />
    );
  });

  return (
    <div className={styles.gridContainer}>
      <GridRow gridCells={headerRow} />
      {mappedRow}
    </div>
  );
}
