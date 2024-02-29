import logoDw2 from "../../assets/logo-dw-2.png";
import kotakSuara from "../../assets/kotak-suara.png";

const HeroSection = () => {
  return (
    <section className="gradient mt-10 rounded-2xl pb-10">
      <div className="relative ">
        {/* Col-1 */}
        <div className="">
          <div>
            <img src={logoDw2} className="h-64 w-96 opacity-50" alt="" />
          </div>

          <div className="mt-[10%] ml-5 leading-[60px]">
            <h1 className="text-white font-bold text-[64px]">SELAMAT DATANG</h1>
            <h4 className=" font-bold text-white text-[24px] text-wrap w-[54%] leading-[30px]">
              PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI
              NAMA
            </h4>
          </div>
        </div>
        {/* col-1 */}

        {/* Col-2 */}
        <div className="absolute right-24 top-0">
          <img src={kotakSuara} className="h-[473px]" alt="" />
        </div>
        {/* col-2 */}
      </div>
    </section>
  );
};

export default HeroSection;
