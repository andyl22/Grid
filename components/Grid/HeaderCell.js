import styles from './HeaderCell.module.scss';
import SortIcon from '@mui/icons-material/Sort';
import GridCell from './GridCell';

export default function HeaderCell(props) {
  const { fieldData, order, dragEnd, sortByField } = props;

  const initiateDrag = (e) => {
    e.dataTransfer.setData('text/plain', order);
    e.dataTransfer.effectAllowed = 'move';
  };

  const endDrag = (e) => {
    dragEnd(e, order);
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const sortByCol = () => {
    sortByField(fieldData.name);
  };

  return (
    <div
      className={styles.headerCell}
      onDragOver={dragOver}
      onDrop={endDrag}
      onDragStart={initiateDrag}
      draggable
    >
      <GridCell textValue={fieldData.label} />
      <button className={styles.sortButton} onClick={sortByCol}>
        <SortIcon fontSize="small" />
      </button>
    </div>
  );
}
