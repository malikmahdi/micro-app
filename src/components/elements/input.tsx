type Props = {
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  const { type, placeholder, name, onChange } = props;
  return (
    <input
      type={type}
      className="border w-full px-4 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-2 focus:ring-[#595959]"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
