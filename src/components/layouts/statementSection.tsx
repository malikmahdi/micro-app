type Props = {
  textStatement: string;
};

const Statement = (props: Props) => {
  const { textStatement } = props;
  return (
    <section className="bg-white">
      <div className="px-36 py-28">
        <div className="">
          <h3 className="text-[40px] text-center font-bold">{textStatement}</h3>
        </div>
      </div>
    </section>
  );
};

export default Statement;
