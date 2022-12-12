const dataModel = [
  {
    label: 'ID',
    name: 'id',
    colWidth: '200px',
    order: 1000,
    display: true
  },
  {
    label: 'Test One',
    name: 'testFieldOne',
    dataType: 'text',
    colWidth: '200px',
    order: 200,
    display: true
  },
  {
    label: 'Test Two',
    name: 'testFieldTwo',
    dataType: 'picklist',
    picklist: ['option one', 'option two', 'option three', 'option four'],
    colWidth: '300px',
    order: 300,
    display: true
  },
  {
    label: 'Test Three',
    name: 'testFieldThree',
    dataType: 'text',
    colWidth: '250px',
    order: 400,
    display: true
  },
  {
    label: 'Test Four',
    name: 'testFieldFour',
    dataType: 'text',
    colWidth: '250px',
    order: 500,
    display: true
  },
  {
    label: 'Test Five',
    name: 'testFieldFive',
    dataType: 'text',
    colWidth: '250px',
    order: 600,
    display: true
  },
  {
    label: 'Test Six',
    name: 'testFieldSix',
    dataType: 'text',
    colWidth: '250px',
    display: false
  },
  {
    label: 'Test Seven',
    name: 'testFieldSeven',
    dataType: 'text',
    colWidth: '250px',
    order: 700,
    display: false
  },
  {
    label: 'Test Eight',
    name: 'testFieldEight',
    dataType: 'text',
    colWidth: '250px',
    order: 800,
    display: false
  }
];

export default dataModel;
