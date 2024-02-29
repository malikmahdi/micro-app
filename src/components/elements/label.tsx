type Props = {
  label: string;
  htmlFor: string;
};
const Label = (props: Props) => {
  const { label, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="block text-[#595959] font-bold">
      {label}
    </label>
  );
};

export default Label;
