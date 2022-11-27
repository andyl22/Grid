import { createContext, useReducer } from 'react';
const GridContext = createContext();

const GridProvider = (props) => {
  const { children, initialColData, initialObjData } = props;
  console.log(initialObjData);

  const reducer = (gridData, action) => {
    const { colData, objData, rowData } = gridData;

    switch (action.type) {
      case 'TEST':
        return 'Cookies';
      default:
        return 'DEFAULT';
    }
  };

  const [gridData, dispatch] = useReducer(reducer, {
    colData: initialColData,
    objData: initialObjData,
    rowData: initialObjData.slice(0, 29)
  });

  return (
    <GridContext.Provider value={{ gridData, dispatch }}>
      {children}
    </GridContext.Provider>
  );
};

export { GridProvider, GridContext };
