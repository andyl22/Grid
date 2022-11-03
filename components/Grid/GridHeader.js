import styles from './GridHeader.module.scss';
import HeaderCell from './HeaderCell';

export default function GridHeader(props) {
  const { headerData, setHeaderData } = props;

  /*  
    Store the start position, allowing users to start dragging.
    Modifies state from the grid using the setHeaderData function passed in props.
  */

  const dragEnd = (e, endPos) => {
    const startPos = e.dataTransfer.getData('text/plain');
    const dataCopy = [...headerData];
    const startData = dataCopy.splice(startPos, 1)[0];
    dataCopy.splice(endPos, 0, startData);
    setHeaderData(dataCopy);
  };

  const mappedHeadercells = headerData.map((column, index) => (
    <HeaderCell
      textValue={column.label}
      key={column.name}
      order={index}
      dragEnd={dragEnd}
    />
  ));

  return <div className={styles.headerRow}>{mappedHeadercells}</div>;
}
