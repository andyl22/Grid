import { useEffect, useState, useContext, useRef } from 'react';
import styles from './HeaderCell.module.scss';
import SortIcon from '@mui/icons-material/Sort';
import GridCell from './GridCell';
import { GridContext } from '../../context/GridContext';

export default function HeaderCell(props) {
  const {
    cellColData,
    order,
    dragStart,
    dragEnter,
    dragDrop,
    dragEnd,
    isDragging,
    dragActive,
    sortByField,
    isSorting,
    updateActiveSort
  } = props;
  const { gridData, dispatch } = useContext(GridContext);
  const cellRef = useRef();

  // Column sorting logic
  const [sortAsc, setSortAsc] = useState(undefined);

  const sortByCol = () => {
    sortByField(cellColData.name, sortAsc);
    setSortAsc(!sortAsc);
    updateActiveSort(cellColData.name);
  };

  // If no longer sorting, unset the state
  useEffect(() => {
    if (!isSorting) {
      setSortAsc(undefined);
    }
  }, [isSorting]);

  // Ensures row data is sorted by first column during initial load
  useEffect(() => {
    if (isSorting) sortByCol();
  }, []);

  /* Column reording. Allow the drag effect and add the order of the drag start header. 
  The order attribute is retrieved when the drag ends through the event details
  */
  const initiateDrag = (e) => {
    dragStart(order);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragDrop = (e) => {
    dragDrop(e, order);
  };

  // Prevent the drag over from overriding the drag drop action from the dragEnd function from the props
  const handleDragOver = (e) => {
    e.preventDefault();
    dragEnter(order);
  };

  const handleDragEnd = () => {
    dragEnd();
  };

  // Resize

  useEffect(() => {
    if (!cellRef) return;

    const cellResizeHandler = (entries) => {
      const observedWidth = entries[0].borderBoxSize[0].inlineSize;
      const colData = [...gridData.colData];
      const colIndex = colData.findIndex(
        (col) => col.name === cellColData.name
      );
      if (gridData.colData[colIndex].colWidth === observedWidth) return;
      colData.splice(colIndex, 1, {
        ...cellColData,
        colWidth: observedWidth
      });
      dispatch({ type: 'UPDATECOL', payload: { updatedColData: colData } });
    };

    const cellResizeObserver = new ResizeObserver(cellResizeHandler);
    cellResizeObserver.observe(cellRef.current);

    return () => cellResizeObserver.disconnect();
  }, [gridData]);

  return (
    <div
      className={styles.headerCell}
      onDragOver={dragActive ? handleDragOver : null}
      onDrop={dragActive ? handleDragDrop : null}
    >
      <div
        className={`${styles.cellContent} ${
          isDragging && styles.disableOverflow
        }`}
        onDragStart={initiateDrag}
        onDragEnd={dragActive ? handleDragEnd : null}
        draggable
        ref={cellRef}
      >
        <GridCell readValue={cellColData.label} cellColData={cellColData} />
        <button
          className={`${styles.sortButton} ${
            isSorting && styles.highlightButton
          } ${sortAsc && styles.flipButton}`}
          onClick={sortByCol}
        >
          <SortIcon fontSize="small" />
        </button>
        {isDragging && <span className={styles.isDragging} />}
      </div>
      {dragActive && <span className={styles.dragTarget} />}
    </div>
  );
}
