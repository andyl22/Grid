import { useState } from 'react';
import styles from './GridCell.module.scss';

export default function GridCell(props) {
  // eslint-disable-next-line react/prop-types
  const { gridEditElement, cancelAction, textValue } = props;
  const [readOnly, setReadOnly] = useState(true);

  const switchToEditMode = () => {
    setReadOnly(false);
  };

  const cancelEdit = (e) => {
    if (e.keyCode === 27) {
      setReadOnly(true);
      cancelAction();
    }
  };

  const divRender = (
    <div className={styles.GridCellContainer} onClick={switchToEditMode}>
      <p>{textValue}</p>
    </div>
  );

  return readOnly ? (
    divRender
  ) : (
    <div onKeyDown={cancelEdit}>{gridEditElement}</div>
  );
}
