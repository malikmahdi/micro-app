import logoDw from "../../assets/logo-dw.png";

const Address = () => {
  return (
    <div className="px-36 py-10">
      <div className="flex items-center gap-14">
        <img src={logoDw} className="h-[110px] w[110px]" alt="" />
        <div className="text-white">
          <h4 className="text-[24px] font-bold">DUMBWAYS.ID</h4>
          <p className="text-[16px] font-thin">
            Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
            Banten 15413
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
