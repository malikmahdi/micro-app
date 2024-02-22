import imgKpu from "../../assets/img-kpu.png";

const Card = () => {
  return (
    <div className="col-span-1">
      <div>
        <img src={imgKpu} alt="" />
      </div>
      <div className="bg-white pt-3 pl-4 pb-4 leading-9">
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-xl text-[20px]">
          SENIN,03 JAN 2023
        </button>
        <div className="mt-4">
          <h2 className=" font-bold text-[32px]">
            KPU TETAPKAN 3 MENTOR TERBAIK
          </h2>
          <p className="text-[24px]">Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
