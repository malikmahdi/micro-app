import { Link } from "react-router-dom";
import imgKpu from "../../assets/img-kpu.png";

const Card = () => {
  return (
    <div className="col-span-1">
      <div>
        <img src={imgKpu} alt="" />
      </div>
      <div className="bg-white pt-3 pl-4 pb-4 leading-9">
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-3 rounded-xl text-[20px]">
          SENIN,03 JAN 2023
        </button>
        <div className="mt-4">
          <Link to="/info-berita">
            <h2 className="font-bold text-[32px] hover:text-blue-600">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </h2>
          </Link>
          <p className="text-[24px]">Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
