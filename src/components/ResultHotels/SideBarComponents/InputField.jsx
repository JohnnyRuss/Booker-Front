import { InputField as Field, Label, Input } from './styled';

function InputField({ label, id, type = 'text', placeholder, value, onClick, setDestination }) {
  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={(e) => setDestination(e.target.value)}
      />
    </Field>
  );
}

export default InputField;
