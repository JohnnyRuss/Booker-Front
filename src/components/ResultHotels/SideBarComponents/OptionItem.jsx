import { OptionItem as Item, Label, OptionInput } from './styled';

function OptionItem({ label, id, type = 'number', name, value, handleOptions }) {
  return (
    <Item>
      <Label htmlFor={id}>{label}</Label>
      <OptionInput type={type} id={id} defaultValue={value} name={name} onChange={handleOptions} />
    </Item>
  );
}

export default OptionItem;
