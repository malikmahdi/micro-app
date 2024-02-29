import Input from "./input";
import Label from "./label";
type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup = (props: Props) => {
  const { type, placeholder, name, label, onChange } = props;

  return (
    <div className="mb-5">
      <Label htmlFor={name} label={label}></Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
