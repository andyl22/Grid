export default function TextGridCell() {
  return <GridCell />;
}

const [revertValue, setRevertValue] = useState('Test Text');
const [gridValue, setGridValue] = useState('Test Text');

// switch from read

const cancelInput = (e) => {
  if (e.keyCode === 27) {
    setReadOnly(true);
    setGridValue(revertValue);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  setRevertValue(gridValue);
  setReadOnly(true);
};

// handle input change and modify state
const handleChange = (e) => {
  setGridValue(e.target.value);
};
