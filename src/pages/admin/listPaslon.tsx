import { Link } from "react-router-dom";
import { FiEdit, FiPlusSquare, FiTrash2 } from "react-icons/fi";
import Navbar from "../../components/layouts/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalConfirmDelete from "../../components/layouts/modalConfirmasi";
// json
import listAdminNav from "../../json/listAdminNav.json";

type Paslon = {
  id: number;
  serial_number: number;
  name: string;
  image: string;
  visi_misi: string;
};

const ListPaslonPage = () => {
  const [isPaslon, setPaslon] = useState<Paslon[]>();
  const [modalDelete, setModalDelete] = useState(false);

  const getAllPartai = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/paslonAll"
      );

      setPaslon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPartai();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/paslon/${id}`);
      getAllPartai();
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
            <h1 className="text-btn font-extrabold text-5xl">LIST PASLON</h1>
          </div>
        </div>

        <div className="flex justify-end">
          <Link to="/form-paslon">
            <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md">
              <span className="flex items-center gap-1">
                <FiPlusSquare />
                Paslon
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-5 mb-10 mx-auto text-center">
          <table className="w-full  border border-collapse table-auto border-slate-400 ">
            <thead className="">
              <tr className="bg-white  text-center">
                <th className="text-center py-2 w-[5%] bg-dasar border border-[#828282]">
                  No.
                </th>
                <th className="text-center py-2 w-[19%] bg-dasar  border border-[#828282]">
                  Image
                </th>
                <th className="text-center py-2 w-[16%] bg-dasar  border border-[#828282]">
                  Name
                </th>
                <th className="text-center py-2 w-[46%] bg-dasar  border border-[#828282]">
                  Visi & Misi
                </th>
                <th className="text-center py-2 w-[14%] bg-dasar  border border-[#828282]">
                  Control
                </th>
              </tr>
            </thead>
            <tbody className="">
              {isPaslon?.map((data, index) => {
                return (
                  <tr className="bg-white" key={index}>
                    <td className="px-2  border border-[#828282]">
                      <h5>{data.serial_number}</h5>
                    </td>
                    <td className="px-2 border border-[#828282]">
                      <div className="px-5 py-2 text-center">
                        <img
                          src={data.image}
                          className="h-32 bg-cover rounded-xl"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="px-2 border border-[#828282]">
                      <h5>{data.name}</h5>
                    </td>
                    <td className="px-2 border border-[#828282]">
                      <p className="text-left">{data.visi_misi}</p>
                    </td>
                    <td className="border border-[#828282] text-center">
                      <div className="flex mx-2 gap-1">
                        <Link to={`/update-paslon/${data.id}`}>
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
                                  onClick={() => handleDelete(data.id)}
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

export default ListPaslonPage;
