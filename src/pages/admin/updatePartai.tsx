import Navbar from "../../components/layouts/navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
// json
import listAdminNav from "../../json/listAdminNav.json";

const UpdatePartaiPage = () => {
  const [updatePartai, setUpdatePartai] = useState({
    name: "",
    logo: "",
    chairman: "",
    visi_misi: "",
    address: "",
    paslonId: undefined,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/partai/${id}`,
        updatePartai
      );

      navigate("/list-partai");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatePartai({ ...updatePartai, [e.target.name]: e.target.value });
  };

  const getDataById = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/partai/${id}`
      );
      console.log("ini data want to update :", data);
      setUpdatePartai(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataById();
  }, []);

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
          <h1 className="text-btn font-extrabold text-5xl">UPDATE PARTAI</h1>
        </div>
        <div className="w-4/6 mx-auto">
          <div className="">
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
                  id="name"
                  value={updatePartai.name}
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
                  value={updatePartai.logo}
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
                  value={updatePartai.chairman}
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
                  value={updatePartai.visi_misi}
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
                  value={updatePartai.address}
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
                  placeholder="00"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  name="paslonId"
                  value={updatePartai.paslonId}
                  onChange={handleInput}
                />
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-btn hover:bg-[#74711d] text-white text-[32px] font-bold px-8 py-4 w-full rounded-xl"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePartaiPage;
