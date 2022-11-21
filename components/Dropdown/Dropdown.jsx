import styles from './Dropdown.module.scss';

export default function Dropdown(props) {
  const { children } = props;

  return <div className={styles.dropdownContainer}>{children}</div>;
}
