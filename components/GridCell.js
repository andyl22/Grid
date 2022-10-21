import { useState } from 'react';
import styles from './GridCell.module.scss';

export default function GridCell(props) {
  const { gridEditElement, submitAction } = props;
  const [readOnly, setReadOnly] = useState(true);

  const switchToEditMode = () => {
    setReadOnly(false);
  };

  const cancelInput = (e) => {
    setReadOnly(true);
    cancelAction();
  };

  const divRender = (
    <div className={styles.GridCellContainer} onClick={switchToEditMode}>
      <p>{gridValue}</p>
    </div>
  );

  const inputRender = (
    <form onSubmit={handleSubmit}>
      <input
        value={gridValue}
        onKeyDown={cancelInput}
        onChange={handleChange}
      />
    </form>
  );

  return readOnly ? divRender : inputRender;
}
