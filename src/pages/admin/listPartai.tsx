import { Link } from "react-router-dom";
import { FaPlus, FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import Navbar from "../../components/layouts/navbar";
// image
import Monyet2 from "../../assets/monyet-2.png";
// json
import listAdminNav from "../../json/listAdminNav.json";
import { useState, useEffect } from "react";
import axios from "axios";

type Partai = {
  name: string;
  logo: string;
  chairman: string;
  visi_misi: string;
  address: string;
};

const ListPartaiPage = () => {
  const [isPartai, setPartai] = useState<Partai[]>();

  const fetchPartai = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/partaiAll"
      );

      setPartai(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchPartai();
  }, []);

  const deletePartai = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/partai/${id}`);
      fetchPartai();
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
      <div className="px-36">
        <div className="px-36 py-16">
          <div className="text-center mt-8">
            <h1 className="text-btn font-extrabold text-5xl">LIST PARTAI</h1>
          </div>
        </div>

        <div className="flex justify-end">
          <Link to="/form-partai">
            <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
              <span className="flex items-center gap-1">
                <FaPlus />
                Partai
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-5 mb-10 mx-auto text-center">
          <table className="w-full  border border-collapse table-auto border-slate-400 ">
            <thead className="">
              <tr className="bg-white   text-center">
                <th className="text-center py-3 bg-dasar border border-[#828282]">
                  No.Urut
                </th>
                <th className="text-center py-3 bg-dasar border border-[#828282]">
                  Name
                </th>
                <th className="text-center ps-2 bg-dasar  border border-[#828282]">
                  Logo
                </th>
                <th className="ps-2 bg-dasar  border border-[#828282]">
                  Chairman
                </th>
                <th className="text-center ps-2 bg-dasar border border-[#828282]">
                  Visi & Misi
                </th>
                <th className="text-center ps-2 bg-dasar border border-[#828282]">
                  Address
                </th>
                <th className="text-center ps-2 bg-dasar border border-[#828282]">
                  Control
                </th>
              </tr>
            </thead>
            <tbody className="">
              {isPartai?.map((data, index) => {
                return (
                  <tr className="bg-white" key={index}>
                    <td className="ps-2  border border-[#828282]">
                      <h5>1</h5>
                    </td>
                    <td className="ps-2 border border-[#828282]">
                      <h5>{data.name}</h5>
                    </td>
                    <td className="ps-2 border border-[#828282]">
                      <div className="px-10 py-2">
                        <img
                          src={data.logo}
                          className="h-32  bg-cover rounded-xl"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="ps-2 border border-[#828282]">
                      <h5>{data.chairman}</h5>
                    </td>
                    <td className="ps-2 border border-[#828282]">
                      <ul className="list-disc list-inside text-center">
                        {data.visi_misi}
                      </ul>
                    </td>
                    <td className="ps-2 border border-[#828282] text-center">
                      <p>{data.address}</p>
                    </td>
                    <td className="ps-2 border border-[#828282] text-center">
                      <div className="gap-2">
                        <button className="px-3 py-2 bg-slate-500 hover:bg-slate-700 text-white rounded-md">
                          <span className="flex justify-items-center items-center gap-1">
                            <FaRegPenToSquare />
                            Update
                          </span>
                        </button>
                        <button
                          onClick={() => deletePartai(data.id)}
                          className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                        >
                          <span className="flex justify-items-center items-center gap-1">
                            <FaRegTrashCan />
                            Delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPartaiPage;
