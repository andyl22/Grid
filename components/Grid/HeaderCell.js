import GridCell from './GridCell';

export default function HeaderCell(props) {
  const { textValue } = props;
  return <GridCell textValue={textValue} />;
}
