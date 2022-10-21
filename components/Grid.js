import styles from './Grid.module.scss';
import GridCell from './GridCell';

export default function Grid() {
  return (
    <div className={styles.GridContainer}>
      <GridCell />
    </div>
  );
}
