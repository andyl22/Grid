import { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import styles from './GridCell.module.scss';

export default function GridCell(props) {
  // eslint-disable-next-line react/prop-types
  const { gridEditElement, submitAction, cancelAction, textValue } = props;
  const [readOnly, setReadOnly] = useState(true);
  const [enableTooltip, setEnableTooltip] = useState(false);

  const switchToEditMode = (e) => {
    e.stopPropagation();
    // prevent editing if there is no cell action provided (used to present static data in a cell)
    if (!submitAction) return;
    setReadOnly(false);
    submitAction;
  };

  const cancelEdit = (e) => {
    if (e.keyCode === 27) {
      setReadOnly(true);
      if (cancelAction) cancelAction();
    }
  };

  const saveEdits = (e) => {
    e.preventDefault();
    setReadOnly(true);
    submitAction();
  };

  const displayTooltip = (e) => {
    const target = e.target;
    if (target.offsetHeight < target.scrollHeight) setEnableTooltip(true);
    // hide tooltip on mouseleave. fires once then the event listener is discardded
    target.parentNode.addEventListener(
      'mouseleave',
      () => setEnableTooltip(false),
      { once: true }
    );
  };

  const divRender = (
    <div className={styles.gridCellContainer} onClick={switchToEditMode}>
      <p className={styles.displayText} onMouseOver={displayTooltip}>
        {textValue}
      </p>
      {enableTooltip && <Tooltip text={textValue} />}
    </div>
  );

  const editRender = (
    <div className={`${styles.gridCellContainer} ${styles.gridEditMode}`}>
      <form onKeyDown={cancelEdit} onSubmit={saveEdits}>
        {gridEditElement}
      </form>
    </div>
  );

  return readOnly ? divRender : editRender;
}
