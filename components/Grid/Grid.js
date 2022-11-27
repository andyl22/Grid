import { useState } from 'react';
import { GridProvider } from '../../context/GridContext';
import GridHeader from './GridHeader';
import GridRowController from './GridRowController';
import styles from './Grid.module.scss';

export default function Grid(props) {
  // TBD: Grid Resizing
  const { colData, objData } = props;
  const [headerData, setHeaderData] = useState(colData);

  return (
    <GridProvider initialColData={colData} initialObjData={objData}>
      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          <GridHeader headerData={headerData} setHeaderData={setHeaderData} />
          <GridRowController />
        </div>
      </div>
    </GridProvider>
  );
}
