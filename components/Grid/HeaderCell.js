import styles from './HeaderCell.module.scss';
import GridCell from './GridCell';

export default function HeaderCell(props) {
  const { textValue, order, dragStart, dragEnd } = props;

  const initiateDrag = () => {
    dragStart(order);
  };

  const endDrag = () => {
    dragEnd(order);
  };

  return (
    <div
      className={styles.headerCell}
      onDragEnter={endDrag}
      onDragStart={initiateDrag}
      draggable
    >
      <GridCell textValue={textValue} />
    </div>
  );
}
