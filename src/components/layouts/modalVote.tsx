import { useState } from "react";
import Monyet2 from "../../assets/monyet-2.png";

const ModalVote = () => {
  const [voteClear, setVoteClear] = useState(false);
  const onVoting = () => {
    setVoteClear(!voteClear);
  };

  const data = [
    {
      no: 1,
      name: "ARIS DEPOK",
    },
    {
      no: 2,
      name: "REZA KICAU MANIA",
    },
    {
      no: 3,
      name: "RIYAN GRACIAS",
    },
  ];

  return (
    <div className="px-36 pb-24">
      <div className="">
        <h1 className="text-btn font-bold text-[40px] my-8 text-center">
          MASUKAN PILIHANMU
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {data.map((item) => (
            //  {/*  */}
            <div className="col-span-1 relative">
              <button className="bg-mvcard rounded-xl p-6 hover:bg-cardinfo2 focus:bg-cardinfo2 group ">
                <button className="w-20 h-20 top-0 right-0 absolute  bg-mvcircle border-2 border-white rounded-full text-center text-white  text-[32px] font-bold group-hover:bg-[#EE6082] group-focus:bg-[#EE6082] ">
                  {item.no}
                </button>
                <div className="mb-2">
                  <img src={Monyet2} className=" rounded-xl" alt="" />
                </div>
                <div className="text-left">
                  <h3 className="font-extrabold text-outline text-3xl text-btn">
                    {item.name}
                  </h3>
                  <p>Memindahkan Indonesia ke Isekai</p>
                  <h5 className="font-bold mt-2">Partai Pengusung :</h5>
                  <ul className="list-disc list-inside ">
                    <li>Partai persatuan monyet</li>
                    <li>Partai sapi perah Indonesia</li>
                    <li>Partai pisang masak</li>
                  </ul>
                </div>
              </button>
            </div>
            // {/*  */}
          ))}
        </div>

        <div className="mt-10 flex gap-5">
          <button className="bg-white border border-2 border-btn hover:bg-btn hover:text-white  text-btn text-[32px] font-bold px-8 py-1 w-full rounded-xl">
            RESET
          </button>
          <button
            onClick={onVoting}
            className="bg-white hover:bg-btn hover:text-white border border-2 border-btn text-btn text-[32px] font-bold px-8 py-1 w-full rounded-xl"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalVote;
