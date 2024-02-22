import { useState } from "react";
import Navbar from "./components/layout/navbar";
import HeroSection from "./components/layout/heroSection";
import Card from "./components/layout/card";
import Statement from "./components/layout/statementSection";
import Address from "./components/layout/address";
import Footer from "./components/layout/footer";
import Banner from "./components/layout/banner";

function App() {
  return (
    <div className="bg-dasar">
      {/* Navbar */}
      <Navbar />
      {/* navbar */}

      <div className="px-36">
        {/* Hero Section */}
        <HeroSection />
        {/* hero  */}

        {/* Sec-2 */}
        <section className="mt-20">
          <div className="grid grid-cols-3 gap-5 ">
            <Banner />
            <Card />
          </div>
        </section>
        {/* sec-2 */}

        {/* Sec-3*/}
        <section className="mt-6">
          <div className="grid grid-cols-3 gap-5">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        {/* sec-3*/}
      </div>

      {/* Sec-4 */}
      <section className="bg-white mt-24">
        <Statement />
      </section>
      {/* sec-4 */}

      {/* Sec-5 */}
      <section className="bg-black">
        <Address />
      </section>
      {/* sec-5 */}

      <div className="h-1 bg-white"></div>

      {/* Sec-6 */}
      <footer className="bg-black">
        <Footer />
      </footer>
      {/* sec-6 */}
    </div>
  );
}

export default App;
