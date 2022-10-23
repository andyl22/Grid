import styles from './GridRow.module.scss';

export default function GridRow(props) {
  const { gridCells } = props;
  return <div className={styles.gridRow}>{gridCells}</div>;
}
