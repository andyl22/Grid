import styles from './Tooltip.module.scss';

export default function Tooltip(props) {
  const { text } = props;

  return (
    <div className={styles.tooltipContainer}>
      <p className={styles.tooltipText} onClick={(e) => e.stopPropagation()}>
        {text}
      </p>
    </div>
  );
}
