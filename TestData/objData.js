const genData = (numOfRows) => {
  const data = [];
  for (let i = 0; i < numOfRows; i++) {
    data.push({
      id: i + 1,
      testFieldOne: { value: `Field One ${i}`, dataType: 'text' },
      testFieldTwo: {
        value: `Field Two ${i}`,
        dataType: 'picklist',
        options: ['Not a Test', 'Test 1-2', 'Picklist Stuff', 'Hello World']
      },
      testFieldThree: { value: `Field Three ${i}`, dataType: 'text' },
      testFieldFour: { value: `Field Four ${i}`, dataType: 'text' },
      testFieldFive: { value: `Field Five ${i}`, dataType: 'text' },
      testFieldSix: { value: `Field Six ${i}`, dataType: 'text' }
    });
  }
  return data;
};

export default genData;
