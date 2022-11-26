import { useEffect, useRef, useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import styles from './GridCell.module.scss';

export default function GridCell(props) {
  // eslint-disable-next-line react/prop-types
  const {
    gridEditElement,
    submitAction,
    cancelAction,
    textValue,
    colWidth = '150px'
  } = props;
  const [readOnly, setReadOnly] = useState(true);
  const [enableTooltip, setEnableTooltip] = useState(false);
  const cellRef = useRef();

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

  const cellWidth = {
    width: `${colWidth}px`
  };

  const submitEdit = (e) => {
    saveEdits(e);
  };

  useEffect(() => {
    if (!cellRef) return;

    const cellResizeHandler = (e) => {
      if (e[0].borderBoxSize[0].inlineSize !== colWidth)
        console.log('Fire resize observer');
    };

    const cellResizeObserver = new ResizeObserver(cellResizeHandler);
    cellResizeObserver.observe(cellRef.current);

    return () => cellResizeObserver.unobserve(cellRef.current);
  }, []);

  const viewRender = (
    <div
      className={styles.gridCellContainer}
      style={cellWidth}
      onClick={switchToEditMode}
      ref={cellRef}
    >
      <p className={styles.displayText} onMouseOver={displayTooltip}>
        {textValue}
      </p>
      {enableTooltip && <Tooltip text={textValue} />}
    </div>
  );

  const editRender = (
    <div
      className={`${styles.gridCellContainer} ${styles.gridEditMode}`}
      style={cellWidth}
      onClick={submitEdit}
    >
      <form
        onKeyDown={cancelEdit}
        onSubmit={saveEdits}
        onClick={(e) => e.stopPropagation()}
      >
        {gridEditElement}
      </form>
    </div>
  );

  return readOnly ? viewRender : editRender;
}
