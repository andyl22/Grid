import { useState } from 'react';
import styles from './GridHeader.module.scss';
import HeaderCell from './HeaderCell';

export default function GridHeader(props) {
  const { headerData, setHeaderData } = props;

  const [dragStartOrder, setDragStartOrder] = useState();
  const [dragEndOrder, setDragEndOrder] = useState();

  const dragStart = (v) => {
    setDragStartOrder(v);
  };

  const dragEnd = (v) => {
    setDragEndOrder(v);
  };

  const saveDragOrder = () => {
    const dataCopy = [...headerData];
    const startData = dataCopy.splice(dragStartOrder, 1)[0];
    dataCopy.splice(dragEndOrder, 0, startData);
    setHeaderData(dataCopy);
  };

  const mappedHeadercells = headerData.map((column, index) => (
    <HeaderCell
      textValue={column.name}
      key={column.name}
      order={index}
      dragStart={dragStart}
      dragEnd={dragEnd}
    />
  ));

  return (
    <div onDragEnd={saveDragOrder} className={styles.headerRow}>
      {mappedHeadercells}
    </div>
  );
}
