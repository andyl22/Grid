import styles from './Grid.module.scss';
import TextGridCell from './TextGridCell';

export default function Grid() {
  return (
    <div className={styles.GridContainer}>
      <TextGridCell />
    </div>
  );
}
