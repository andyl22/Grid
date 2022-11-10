import styles from './GridRow.module.scss';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function GridRow(props) {
  const { gridCells } = props;
  return (
    <div className={styles.gridRow}>
      <button className={styles.dragButton}>
        <DragIndicatorIcon />
      </button>
      {gridCells}
    </div>
  );
}
