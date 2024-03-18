import { Link } from "react-router-dom";
import { FiEdit, FiPlusSquare, FiSearch, FiTrash2 } from "react-icons/fi";
import Navbar from "../../components/layouts/navbar";
// json
import listAdminNav from "../../json/listAdminNav.json";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import ModalConfirmDelete from "../../components/layouts/modalConfirmasi";

type Partai = {
  id: number;
  partaiId: number;
  name: string;
  logo: string;
  chairman: string;
  visi_misi: string;
  address: string;
};

const ListPartaiPage = () => {
  const [isPartai, setPartai] = useState<Partai[]>();
  const [modalDelete, setModalDelete] = useState(false);

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

  // const fetchPartaiOne = async (
  //   e: FormEvent<HTMLButtonElement>
  // ): Promise<void> => {
  //   e.preventDefault();
  //   try {
  //     await axios.get(`http://localhost:5000/api/v1/partai`);

  //     fetchPartai();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

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

        <div className="flex justify-between">
          <div className="w-2/4">
            <form action="" className="flex">
              <input
                type="search"
                id="search"
                placeholder="Search Partai..."
                className="w-full border border-slate-400 px-3 py-1  outline-none"
              />
              <button className="border border-slate-400 py-1 px-3 hover:bg-blue-500 hover:text-white">
                <FiSearch />
              </button>
            </form>
          </div>
          <Link to="/form-partai">
            <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
              <span className="flex items-center gap-1">
                <FiPlusSquare />
                Partai
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-5 mb-10 mx-auto text-center">
          <table className="w-full  border border-collapse table-auto border-slate-400 ">
            <thead className="">
              <tr className="bg-white   text-center">
                <th className="text-center px-2 py-3 w-[3%]  bg-dasar border border-[#828282]">
                  No.
                </th>
                <th className="text-center py-3 w-[10%] bg-dasar border border-[#828282]">
                  Name
                </th>
                <th className="text-center w-[18%] bg-dasar  border border-[#828282]">
                  Logo
                </th>
                <th className="text-center w-[8%] bg-dasar border border-[#828282]">
                  Chairman
                </th>
                <th className="text-center w-[25%] bg-dasar border border-[#828282]">
                  Visi & Misi
                </th>
                <th className="text-center w-[22%] bg-dasar border border-[#828282]">
                  Address
                </th>
                <th className="text-center w-[14%] bg-dasar border border-[#828282]">
                  Control
                </th>
              </tr>
            </thead>
            <tbody className="" id="table-body">
              {isPartai?.map((data, index) => {
                return (
                  <tr className="bg-white" key={index} id="table-row">
                    <td className="border border-[#828282]">
                      <h5>{index + 1}</h5>
                    </td>
                    <td className="border border-[#828282]" id="data-name">
                      <h5>{data.name}</h5>
                    </td>
                    <td className="border border-[#828282]">
                      <div className="px-10 py-2">
                        <img
                          src={data.logo}
                          className="h-32  bg-cover rounded-xl"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="border border-[#828282]">
                      <h5>{data.chairman}</h5>
                    </td>
                    <td className="border border-[#828282]">
                      <ul className="list-disc list-inside text-center">
                        {data.visi_misi}
                      </ul>
                    </td>
                    <td className="border border-[#828282] text-center ">
                      <p>{data.address}</p>
                    </td>
                    <td className="border border-[#828282] text-center">
                      <div className="flex mx-2 gap-1">
                        <Link to={`/update-partai/${data.id}`}>
                          <button className="px-3 py-2 bg-slate-500 hover:bg-slate-700 text-white rounded-md">
                            <span className="flex justify-items-center items-center gap-1">
                              <FiEdit />
                              Update
                            </span>
                          </button>
                        </Link>

                        <button
                          onClick={() => setModalDelete(true)}
                          className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md"
                        >
                          <span className="flex justify-items-center items-center gap-1">
                            <FiTrash2 />
                            Delete
                          </span>
                        </button>

                        <ModalConfirmDelete
                          open={modalDelete}
                          onClose={() => {
                            setModalDelete(false);
                          }}
                        >
                          <div className="flex justify-center  items-center">
                            <div className="w-96 mx-6">
                              <h1 className="text-btn font-extrabold text-2xl text-center mb-5">
                                Are you sure you want to delete?
                              </h1>
                              <hr />
                              <div className="flex gap-2 mt-5">
                                <button
                                  onClick={() => deletePartai(data.id)}
                                  className="w-full py-2 bg-red-500 text-white rounded-md"
                                >
                                  Yes
                                </button>
                                <button
                                  onClick={() => {
                                    setModalDelete(false);
                                  }}
                                  className="w-full py-2 bg-red-500 text-white rounded-md"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        </ModalConfirmDelete>
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
