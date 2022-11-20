import styles from './GridRow.module.scss';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function GridRow(props) {
  const {
    gridCells,
    order,
    startDragController,
    dragOverController,
    dragDropController,
    dragEndController,
    isDragging,
    dragActive
  } = props;

  const handleDragStart = (e) => {
    const img = new Image();
    startDragController(order);
    e.dataTransfer.setDragImage(img, 0, 0);
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
      onDrop={dragActive ? handleDragDrop : null}
      onDragOver={dragActive ? handleDragOver : null}
    >
      <button
        className={styles.dragButton}
        onDragStart={handleDragStart}
        onDragEnd={dragActive ? handleDragEnd : null}
        draggable
      >
        <DragIndicatorIcon />
      </button>
      {gridCells}
      {isDragging && <span className={styles.dragging} />}
    </div>
  );
}
