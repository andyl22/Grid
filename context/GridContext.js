import { createContext, useReducer } from 'react';
const GridContext = createContext();

const GridProvider = (props) => {
  const { children, initialColData, initialObjData } = props;

  const reducer = (gridData, action) => {
    const { colData, objData, rowData } = gridData;

    switch (action.type) {
      case 'TEST':
        return { ...gridData };
      case 'LOADRECORDS':
        if (objData.length === 0) return { ...gridData };
        if (objData.length > 29) {
          return {
            ...gridData,
            rowData: [...rowData, ...objData.slice(0, 29)],
            objData: objData.slice(29)
          };
        } else {
          return {
            ...gridData,
            rowData: [...rowData, ...objData],
            objData: []
          };
        }
      case 'UPDATEROW':
        return {
          ...gridData,
          rowData: action.payload.updatedRowData
        };
      default:
        return { ...gridData };
    }
  };

  const [gridData, dispatch] = useReducer(reducer, {
    colData: initialColData,
    objData: initialObjData.slice(29),
    rowData: initialObjData.slice(0, 29)
  });

  return (
    <GridContext.Provider value={{ gridData, dispatch }}>
      {children}
    </GridContext.Provider>
  );
};

export { GridProvider, GridContext };
