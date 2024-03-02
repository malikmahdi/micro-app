import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "../index.css";
import Monyet1 from "../../assets/monyet-1.png";

const data = [
  {
    nomorUrut: 1,
    namaPaslon: "ARIS DEPOK",
    presentase: 60,
    bgCard: "bg-cardinfo1",
    bgCardMini: "bg-[#5D100E]",
    colorName: "text-[#5D100E]",
    bgShadow: "shadow-red-500",
  },
  {
    nomorUrut: 2,
    namaPaslon: "REZA KICAW MANIA",
    presentase: 30,
    bgCard: "bg-cardinfo2",
    bgCardMini: "bg-[#5D5517]",
    colorName: "text-[#5D5517]",
    bgShadow: "shadow-yellow-500",
  },
  {
    nomorUrut: 3,
    namaPaslon: "RIYAN GRACIAS",
    presentase: 10,
    bgCard: "bg-cardinfo3",
    bgCardMini: "bg-[#255D4E]",
    colorName: "text-[#255D4E]",
    bgShadow: "shadow-cyan-600",
  },
];

export default function CarouselPage() {
  return (
    <>
      <div className=" bg-[#cecece]">
        <Swiper className="rounded-lg mySwiper w-[100%] ">
          <SlidderButton />
          {data.map((d, index) => (
            <SwiperSlide key={index} className="px-20 pb-10">
              <div className="bg-white p-16 rounded-xl shadow-lg shadow-neutral-500">
                <div className="grid grid-cols-3 gap-16">
                  <div className="col-span-1">
                    <div>
                      <img
                        src={Monyet1}
                        className="bg-cover rounded-xl"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* col-span-3 */}
                  <div className="col-span-2 flex flex-col">
                    <div>
                      <div className="leading-9">
                        <h5 className="text-[24px] font-bold">
                          Nomor Urut : {d.nomorUrut}
                        </h5>
                        <h2 className="text-[40px] font-bold text-red-900">
                          {d.namaPaslon}
                        </h2>
                      </div>

                      <div className="text-[24px]">
                        <p className="mt-8">Visi & Misi</p>
                        <ul className="list-disc list-inside">
                          <li>Memindahkan Indonesia ke Isekai.</li>
                          <li>Nonton anime 3x sehari.</li>
                          <li>Melakukan peresapan pada budaya jepang.</li>
                        </ul>

                        <p className="mt-8">Koalisi</p>
                        <ul className="list-disc list-inside">
                          <li>Partai Persatuan Wiboo.</li>
                          <li>Partai Redbull.</li>
                          <li>Partai Black Magic.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* col-span-3 */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const SlidderButton = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="focus:bg-white text-slate-500 font-[700] h-14 w-14 rounded-full flex items-center justify-center absolute left-0 top-[40%] z-50"
      >
        <FaAngleLeft size="35px" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="focus:bg-white text-slate-500 font-[700] h-14 w-14 rounded-full flex items-center justify-center absolute right-0 top-[40%] z-50"
      >
        <FaAngleRight size="35px" />
      </button>
    </div>
  );
};

// import { Carousel } from "flowbite-react";
// import Monyet1 from "../../assets/monyet-1.png";

// const data = [
//   {
//     nomorUrut: 1,
//     namaPaslon: "ARIS DEPOK",
//   },
//   {
//     nomorUrut: 2,
//     namaPaslon: "REZA KICAW MANIA",
//   },
//   {
//     nomorUrut: 3,
//     namaPaslon: "RIYAN GRACIAS",
//   },
// ];

// function CartPage() {
//   return (
//     <div className="h-[100vh] px-20 bg-[#CECECE]">
//       <Carousel className="my-20 h-full px-20" indicators={false}>
//         {data.map((item) => (
//           <div className="flex items-center h-full justify-center  dark:bg-gray-700 dark:text-white">
//             <div className="bg-white  p-16 rounded-xl">
//               <div className="grid grid-cols-3 gap-16">
//                 <div className="col-span-1">
//                   <div>
//                     <img src={Monyet1} className="bg-cover rounded-xl" alt="" />
//                   </div>
//                 </div>

//                 {/* col-span-3 */}
//                 <div className="col-span-2 flex flex-col">
//                   <div>
//                     <div className="leading-9">
//                       <h5 className="text-[24px] font-bold">
//                         Nomor Urut : {item.nomorUrut}
//                       </h5>
//                       <h2 className="text-[40px] font-bold text-red-900">
//                         {item.namaPaslon}
//                       </h2>
//                     </div>

//                     <div className="text-[24px]">
//                       <p className="mt-8">Visi & Misi</p>
//                       <ul className="list-disc list-inside">
//                         <li>Memindahkan Indonesia ke Isekai.</li>
//                         <li>Nonton anime 3x sehari.</li>
//                         <li>Melakukan peresapan pada budaya jepang.</li>
//                       </ul>

//                       <p className="mt-8">Koalisi</p>
//                       <ul className="list-disc list-inside">
//                         <li>Partai Persatuan Wiboo.</li>
//                         <li>Partai Redbull.</li>
//                         <li>Partai Black Magic.</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 {/* col-span-3 */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
// export default CartPage;

// // import React, { Component } from "react";
// // import Chart from "react-apexcharts";

// // class CartPage extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       options: {},
// //       series: [44, 55, 41],
// //       labels: ["Aris", "Reza", "Riyan"],
// //     };
// //   }

// //   render() {
// //     return (
// //       <div className="w-sm-max flex justify-center">
// //         <div className="donut">
// //           <Chart
// //             options={this.state.options}
// //             series={this.state.series}
// //             type="pie"
// //             width="380"
// //           />
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default CartPage;
