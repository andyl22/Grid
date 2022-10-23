import styles from './Grid.module.scss';
import GridRow from './GridRow';
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
      testFieldOne: { value: 'Test', dataType: 'text' },
      testFieldTwo: {
        value: 'Test',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test', dataType: 'text' }
    },
    {
      id: 2,
      testFieldOne: { value: 'Test', dataType: 'text' },
      testFieldTwo: {
        value: 'Test',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test', dataType: 'text' }
    },
    {
      id: 3,
      testFieldOne: { value: 'Test', dataType: 'text' },
      testFieldTwo: {
        value: 'Test',
        dataType: 'picklist',
        options: ['Test', 'Not a Test', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: 'Test', dataType: 'text' }
    }
  ];

  const testRowData = rowData.map((row) => {
    switch (row.dataType) {
      case 'picklist':
        return <PicklistGridCell />;
      case 'text':
        return <TextGridCell />;
      default:
        console.log('Meow');
    }
  });

  const headerRow = (
    <>
      <p>Header 1</p>
      <p>Header 2</p>
    </>
  );

  return (
    <div className={styles.gridContainer}>
      <GridRow gridCells={headerRow} />
      <GridRow gridCells={testRowData} />
    </div>
  );
}
