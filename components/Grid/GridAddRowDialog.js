import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styles from './GridAddRowDialog.module.scss';

export default function GridAddRow(props) {
  const { gridDataModel } = props;
  const [form, setForm] = useState({});
  const [showDialog, setShowDialog] = useState(false);

  const initiateRowAdd = () => {
    setShowDialog(true);
  };

  const handleClickOut = () => {
    setShowDialog(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const mappedGridDataModel = gridDataModel.map((field) => {
    return (
      <div key={field.name} className={styles.formInput}>
        <label htmlFor={field.name}>{field.label}</label>
        <input
          type="text"
          id={field.name}
          value={form.field}
          onChange={handleFormChange}
        />
      </div>
    );
  });

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
            <form className={styles.formContainer} onSubmit={handleFormSubmit}>
              {mappedGridDataModel}
              <button className={styles.formSubmit}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
