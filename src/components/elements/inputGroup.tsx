import Input from "./input";
import Label from "./label";
type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
};

const InputGroup = (props: Props) => {
  const { type, placeholder, name, label } = props;

  return (
    <div className="mb-5">
      <Label htmlFor={name} label={label}></Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputGroup;
