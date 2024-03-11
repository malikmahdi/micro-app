import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CarouselPage from "../../components/layouts/carousel";
import Address from "../../components/layouts/address";
import Footer from "../../components/layouts/footer";
import Navbar from "../../components/layouts/navbar";
import Statement from "../../components/layouts/statementSection";
//

//
import Monyet2 from "../../assets/monyet-2.png";
import ModalPaslon from "../../components/layouts/modalPaslon";
import Pie from "../../components/elements/pieChart";
import CarouselPage from "../../components/layouts/carousel";

import listUserNav from "../../json/listUserNav.json";
import dataPaslonVote from "../../json/dataPaslonVote.json";

// const data =

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "blue",
        padding: "20px",
        fontSize: "20px",
        border: "10px blue solid",
        width: "20px",
        height: "20px",
      }}
      onClick={onClick}
    />
  );
}

const InfoPemiluPage = () => {
  // const [bgcardP = "bg-cardinfo2"] = props;
  const [pilih, setPilih] = useState(false);
  const [openVote, setOpenVote] = useState(false);
  const pilihFunc = () => {
    setPilih(!pilih);
    setOpenVote(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
  };

  const dataCrt = {
    // labels: ["Paslon 3", "Paslon 2", "Paslon 1"],

    datasets: [
      {
        label: "100 of Votes",
        data: [60, 30, 10],
        backgroundColor: ["#FF6384", "#FFCD56", "#36A2EB"],
      },
    ],
    plugins: [1, 2, 3],
  };

  return (
    <>
      <Navbar
        titleNavbar="
          PEMILU PRESIDEN DUMBWAYS.ID
          "
        listItem={listUserNav}
      />
      <div className="px-36 pb-20">
        <div className="px-36 py-16">
          <div className="text-center mt-8">
            <h1 className="text-btn font-extrabold text-5xl">
              INFO PEMILU TERUPDATE
            </h1>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <Pie />
          </div>
          {/* Col-2 */}
          <div className="col-span-2 mx-auto">
            <CardPaslon />

            {/*  */}

            {/* conditional select paslon */}
            {pilih === false ? (
              <button
                className="rounded-[10px] bg-btn px-20 py-[5px] text-white font-bold text-[32px]"
                onClick={() => setOpenVote(true)}
              >
                MASUKKAN SUARAMU
              </button>
            ) : (
              <p className="uppercase mt-10 text-red-600 text-[32px] font-[700] ">
                Anda sudah memilih !!!
              </p>
            )}
            <ModalPaslon
              open={openVote}
              onClose={() => {
                setOpenVote(false);
              }}
            >
              <div className="px-36 pb-5">
                <div className="">
                  <h1 className="text-btn font-extrabold text-[35px] my-5 text-center">
                    MASUKAN PILIHANMU
                  </h1>
                  <div className="grid grid-cols-3 gap-5">
                    {dataPaslonVote.map((item) => (
                      //  {/*  */}
                      <div className="col-span-1 relative">
                        <button className="bg-mvcard rounded-xl p-6 hover:bg-cardinfo2 focus:bg-cardinfo2 group ">
                          <button className="w-16 h-16 top-0 right-0 absolute bg-mvcircle border-2 border-white rounded-full text-center text-white  text-[32px] font-bold group-hover:bg-[#EE6082] group-focus:bg-[#EE6082] ">
                            {item.nomorUrut}
                          </button>
                          <div className="mb-2">
                            <img
                              src={Monyet2}
                              className="rounded-xl w-full"
                              alt=""
                            />
                          </div>
                          <div className="text-left">
                            <h3 className="font-extrabold text-outline text-3xl text-btn">
                              {item.namaPaslon}
                            </h3>
                            <p>Memindahkan Indonesia ke Isekai</p>
                            <h5 className="font-bold mt-2">
                              Partai Pengusung :
                            </h5>
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

                  <div className="mt-5 flex gap-5">
                    <button className="bg-white border-2 border-btn hover:bg-btn hover:text-white  text-btn text-[25px] font-bold px-8 py-1 w-full rounded-xl">
                      RESET
                    </button>
                    <button
                      onClick={pilihFunc}
                      className="bg-white hover:bg-btn hover:text-white border-2 border-btn text-btn text-[25px] font-bold px-8 py-1 w-full rounded-xl"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </ModalPaslon>
          </div>
          {/* col-2 */}
        </div>
        {/*  */}
      </div>
      {/* Section-Carousel */}
      <section className="bg-dasar">
        <div className="px-16 py-20">
          <div className="text-center mb-20">
            <h1 className="text-btn font-extrabold text-5xl">INFO PASLON</h1>
          </div>
          <CarouselPage />
          <div className="shadow-lg shadow-neutral-500 rounded-xl"></div>
        </div>
      </section>
      {/* section-carousel */}

      {/* Section-statement */}
      <div className="text-red-500">
        <Statement
          textStatement="PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
YANG PENTING TIDAK MELEGALKAN SLOT"
        />
      </div>

      <Address />
      <div className="h-1 bg-white"></div>
      <Footer />
    </>
  );
};

export default InfoPemiluPage;

const CardPaslon = () => {
  return (
    <>
      {dataPaslonVote.map((item) => (
        <div
          className={`flex mb-5 w-[657px] ${item.bgCard}  py-5 px-8 rounded-xl shadow-md ${item.bgShadow} items-center`}
        >
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-1">
              <div
                className={`w-[80px] h-full ${item.bgCardMini} border-2 border-red-50 rounded-xl`}
              >
                <div className="text-center text-white font-bold mt-2">
                  <h3 className="text-[18px]">No.</h3>
                  <h3 className="text-[18px]">Paslon</h3>
                  <h5 className="text-[40px]">{item.nomorUrut}</h5>
                </div>
              </div>
            </div>

            <div className="col-span-4 items-center">
              <div className="leading-[45px] mt-5">
                <h2
                  className={`text-[48px] font-extrabold text-outline ${item.colorName}`}
                >
                  {item.namaPaslon}
                </h2>
                <h2
                  className={`text-[48px] font-extrabold text-outline ${item.colorName}`}
                >
                  {item.presentase} %
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
