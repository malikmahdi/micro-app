import Navbar from "../../components/layouts/navbar";
// image
import Monyet1 from "../../assets/monyet-1.png";
// json
import listAdminNav from "../../json/listAdminNav.json";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormPaslonPage = () => {
  const [dataPaslon, setDataPaslon] = useState({
    serial_number: undefined,
    name: "",
    image: "",
    visi_misi: "",
  });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDataPaslon({ ...dataPaslon, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/paslon", dataPaslon);
      navigate("/list-paslon");
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
          <h1 className="text-btn font-extrabold text-5xl">ADD PASLON</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img src={Monyet1} className="" alt="" />
          </div>
          <div className="col-span-2 mx-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="text-2xl text-label font-semibold text-[#595959]"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="John Doe"
                  name="name"
                  id="name"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="serial_number"
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Serial Number
                </label>
                <input
                  type="number"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="00"
                  name="serial_number"
                  id="serial_number"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="image"
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Image
                </label>
                <input
                  type="text"
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?t=st=1710442446~exp=1710446046~hmac=76acf8003b1868bddbffe4f7d9a5e094aac994aa7d2c3357d7079aace73b0733&w=740"
                  name="image"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="visi_misi"
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Visi Misi
                </label>
                <input
                  name="visi_misi"
                  id="visi_misi"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus, vero labore perspiciatis illo incidunt suscipit ut odit neque nam eveniet assumenda, expedita quos iusto quo atque rem esse vitae Accusantium ut enim ab officia sunt, quisquam nisi aut."
                  className="border w-full mt-2 px-4 py-5 rounded-xl outline outline-2 outline-[#595959]"
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

export default FormPaslonPage;
