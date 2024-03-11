import Navbar from "../../components/layouts/navbar";
import HeroSection from "../../components/layouts/heroSection";
import Banner from "../../components/layouts/banner";
import Card from "../../components/layouts/card";
import Statement from "../../components/layouts/statementSection";
import Address from "../../components/layouts/address";
import Footer from "../../components/layouts/footer";
// json
import listUserNav from "../../json/listUserNav.json";

const HomeUnLogin: React.FC = () => {
  // const [form]
  return (
    <div className="bg-dasar">
      {/* Navbar */}
      <Navbar
        titleNavbar="
          PEMILU PRESIDEN DUMBWAYS.ID
          "
        listItem={listUserNav}
      />

      {/* Hero-section */}
      <div className="lg:px-36 sm:px-0">
        {/* Hero Section */}
        <HeroSection />

        {/* Sec-2 */}
        <section className="mt-20">
          <div className="grid grid-cols-3 gap-5 ">
            <Banner />
            <Card />
          </div>
        </section>

        {/* Sec-3*/}
        <section className="mt-6 mb-24">
          <div className="grid grid-cols-3 gap-5 ">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        {/*-----------*/}
      </div>
      {/* Sec-4 */}
      <Statement
        textStatement="PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS
          PASTIKAN MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT"
      />
      {/* Sec-5 */}
      <Address />
      <div className="h-1 bg-white"></div>
      {/* Sec-6 */}
      <Footer />
    </div>
  );
};

export default HomeUnLogin;
