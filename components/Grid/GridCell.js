import { useState } from 'react';
import styles from './GridCell.module.scss';

export default function GridCell(props) {
  // eslint-disable-next-line react/prop-types
  const { gridEditElement, submitAction, cancelAction, textValue } = props;
  const [readOnly, setReadOnly] = useState(true);

  const switchToEditMode = () => {
    setReadOnly(false);
    submitAction;
  };

  const cancelEdit = (e) => {
    if (e.keyCode === 27) {
      setReadOnly(true);
      cancelAction();
    }
  };

  const saveEdits = (e) => {
    e.preventDefault();
    setReadOnly(true);
    submitAction();
  };

  const divRender = (
    <div className={styles.gridCellContainer} onClick={switchToEditMode}>
      <p>{textValue}</p>
    </div>
  );

  const editRender = (
    <form
      className={styles.gridCellContainer}
      onKeyDown={cancelEdit}
      onSubmit={saveEdits}
    >
      {gridEditElement}
    </form>
  );

  return readOnly ? divRender : editRender;
}
