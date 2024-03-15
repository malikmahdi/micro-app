import Navbar from "../../components/layouts/navbar";
// image
import Monyet1 from "../../assets/monyet-1.png";
// json
import listAdminNav from "../../json/listAdminNav.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

const FormPartaiPage = () => {
  const [dataPartai, setDataPartai] = useState({
    name: "",
    logo: "",
    chairman: "",
    visi_misi: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDataPartai({ ...dataPartai, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/partai", dataPartai);
      navigate("/list-partai");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar
        titleNavbar="
          DASHBOARD PEMILU
          "
        listItem={listAdminNav}
      />

      <div className="px-36 py-16">
        <div className="text-center mt-8 mb-24">
          <h1 className="text-btn font-extrabold text-5xl">ADD PARTAI</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src={Monyet1} className="" alt="" />
          </div>
          <div className="col-span-2 mx-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="Partai Buruh"
                  name="name"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Logo
                </label>
                <input
                  type="text"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?t=st=1710442446~exp=1710446046~hmac=76acf8003b1868bddbffe4f7d9a5e094aac994aa7d2c3357d7079aace73b0733&w=740"
                  name="logo"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Chairman
                </label>
                <input
                  type="text"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="Semaun"
                  name="chairman"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Visi Misi
                </label>
                <input
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus, vero labore perspiciatis illo incidunt suscipit ut odit neque nam eveniet assumenda, expedita quos iusto quo atque rem esse vitae Accusantium ut enim ab officia sunt, quisquam nisi aut."
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  name="visi_misi"
                  type="text"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Jl.Swasembada Barat, Marunda, Jakarta Utara"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  name="address"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Paslon ID
                </label>
                <input
                  type="number"
                  placeholder="Jl.Swasembada Barat, Marunda, Jakarta Utara"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  name="paslonId"
                  onChange={handleInput}
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-btn hover:bg-[#74711d] text-white text-[32px] font-bold px-8 py-4 w-full rounded-xl"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPartaiPage;
