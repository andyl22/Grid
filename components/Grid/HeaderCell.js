import { useEffect, useState } from 'react';
import styles from './HeaderCell.module.scss';
import SortIcon from '@mui/icons-material/Sort';
import GridCell from './GridCell';

export default function HeaderCell(props) {
  const {
    fieldData,
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

  // Column sorting logic
  const [sortAsc, setSortAsc] = useState(undefined);

  const sortByCol = () => {
    sortByField(fieldData.name, sortAsc);
    setSortAsc(!sortAsc);
    updateActiveSort(fieldData.name);
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

  return (
    <div
      className={styles.headerCell}
      onDragStart={initiateDrag}
      onDragOver={dragActive ? handleDragOver : null}
      onDrop={dragActive ? handleDragDrop : null}
      onDragEnd={dragActive ? handleDragEnd : null}
      draggable
    >
      <GridCell textValue={fieldData.label} colWidth={fieldData.colWidth} />
      <button
        className={`${styles.sortButton} ${
          isSorting && styles.highlightButton
        } ${sortAsc && styles.flipButton}`}
        onClick={sortByCol}
      >
        <SortIcon fontSize="small" />
      </button>
      {isDragging && <span className={styles.isDragging} />}
      {dragActive && <span className={styles.dragTarget} />}
    </div>
  );
}
