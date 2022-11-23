import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './GridAddRowDialog.module.scss';

export default function GridAddRow() {
  const [showDialog, setShowDialog] = useState(false);

  const initiateRowAdd = () => {
    setShowDialog(true);
  };

  const handleClickOut = () => {
    setShowDialog(false);
  };

  return (
    <div className={styles.gridAddRowContainer}>
      <button className={styles.addRowButton} onClick={initiateRowAdd}>
        <AddIcon />
      </button>
      {showDialog && (
        <div className={styles.dialogContainer} onClick={handleClickOut}>
          <div
            className={styles.dialogContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p>Test</p>
          </div>
        </div>
      )}
    </div>
  );
}
