import styles from './Grid.module.scss';
import PicklistGridCell from './PicklistGridCell';
import TextGridCell from './TextGridCell';

export default function Grid() {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridRow}>
        <TextGridCell />
        <PicklistGridCell />
      </div>
      <div className={styles.gridRow}>
        <TextGridCell />
        <PicklistGridCell />
      </div>
      <div className={styles.gridRow}>
        <TextGridCell />
        <PicklistGridCell />
      </div>
    </div>
  );
}
