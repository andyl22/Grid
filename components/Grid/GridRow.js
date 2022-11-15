import styles from './GridRow.module.scss';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function GridRow(props) {
  const {
    gridCells,
    order,
    startDragController,
    dragOverController,
    dragDropController,
    dragEndController
  } = props;

  const handleDragStart = (e) => {
    startDragController(order);
    e.dataTransfer.setData('text/plain', order);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    dragOverController(order);
  };

  const handleDragDrop = () => {
    dragDropController();
  };

  const handleDragEnd = () => {
    dragEndController();
  };

  return (
    <div
      className={styles.gridRow}
      onDragOver={handleDragOver}
      onDrop={handleDragDrop}
    >
      <button
        className={styles.dragButton}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <DragIndicatorIcon />
      </button>
      {gridCells}
    </div>
  );
}
