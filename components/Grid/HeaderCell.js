import styles from './HeaderCell.module.scss';
import GridCell from './GridCell';

export default function HeaderCell(props) {
  const { textValue, order, dragEnd } = props;

  const initiateDrag = (e) => {
    e.dataTransfer.setData('text/plain', order);
    e.dataTransfer.effectAllowed = 'move';
  };

  const endDrag = (e) => {
    dragEnd(e, order);
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={styles.headerCell}
      onDragOver={dragOver}
      onDrop={endDrag}
      onDragStart={initiateDrag}
      draggable
    >
      <GridCell textValue={textValue} />
    </div>
  );
}
