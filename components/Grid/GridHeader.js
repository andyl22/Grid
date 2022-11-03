import { useEffect, useState } from 'react';
import styles from './GridHeader.module.scss';
import HeaderCell from './HeaderCell';

export default function GridHeader(props) {
  const { headerData } = props;
  const [dragStartOrder, setDragStartOrder] = useState();
  const [dragEndOrder, setDragEndOrder] = useState();

  const dragStart = (v) => {
    setDragStartOrder(v);
  };

  const dragEnd = (v) => {
    setDragEndOrder(v);
  };

  const saveDragOrder = () => {
    const dragStartData = headerData.splice(dragStartOrder, 1);
    headerData.splice(dragEndOrder, 0, dragStartData[0]);
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
