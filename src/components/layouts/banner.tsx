import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="col-span-2 relative  bg-[url('assets/img-kpu-2.png')] bg-cover ">
      <div className="mt-64 ml-4">
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-xl text-[20px]">
          SENIN,03 JAN 2023
        </button>
        <div className="">
          <Link to="/info-berita">
            <h2 className="text-white font-bold text-[32px] hover:underline">
              KPU TETAPKAN 3 MENTOR TERBAIK
            </h2>
          </Link>
          <p className="text-white text-[24px]">Super Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
