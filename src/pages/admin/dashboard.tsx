import Navbar from "../../components/layouts/navbar";
// image
import Person1 from "../../assets/person.jpg";
// json
import listAdminNav from "../../json/listAdminNav.json";
import dataPaslon from "../../json/dataPaslon.json";
import dataVoter from "../../json/dataVoter.json";

const DashboardPage = () => {
  return (
    <>
      <Navbar
        titleNavbar="
          DASHBOARD PEMILU
          "
        listItem={listAdminNav}
      />
      <div className="px-36 my-20">
        <h1 className="text-btn font-bold text-[40px] my-16 text-center">
          DASHBOARD
        </h1>

        <div className="grid grid-cols-3 gap-5">
          {dataPaslon.map((items) => (
            <div className="col-span-1">
              <div
                className={`w-24 h-24 mx-auto flex items-center justify-center mb-6 ${items.bgCard}  border-8 ${items.colorBorder} rounded-full ${items.colorText} text-[32px] font-bold`}
              >
                <h5>{items.no}</h5>
              </div>
              <div
                className={`${items.bgCard} rounded-xl p-6 shadow-lg shadow-slate-600`}
              >
                <div className="mb-2">
                  <img
                    src={Person1}
                    className="w-full h-60 rounded-xl"
                    alt=""
                  />
                </div>
                <div className="">
                  <h3
                    className={`font-extrabold text-3xl ${items.colorText} text-outline`}
                  >
                    {items.name}
                  </h3>
                  <p
                    className={`${items.colorText} text-xl font-extrabold text-outline-child`}
                  >
                    Akumulasi : {items.akumulasi}
                  </p>
                  <p
                    className={`${items.colorText}  text-xl font-extrabold text-outline-child`}
                  >
                    Jumlah Vote : {items.totalVoter}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-dasar px-36 py-10">
        <div className="mt-10">
          <h1 className="text-btn font-bold text-[40px] text-center">
            LIST VOTER
          </h1>
        </div>

        <div className="mt-16 mb-10">
          <table className="text-left w-full  border border-collapse table-auto border-slate-400 border-spacing-x-5">
            <thead className="">
              <tr className="bg-white">
                <th className="p-3 text-center border bg-[#E5E5E5] border-slate-300">
                  No
                </th>
                <th className="border ps-2 pe-40 bg-[#E5E5E5] border-slate-300">
                  Nama
                </th>
                <th className="border ps-2 pe-40 bg-[#E5E5E5] border-slate-300">
                  Alamat
                </th>
                <th className="border ps-2 pe-40 bg-[#E5E5E5] border-slate-300">
                  Jenis Kelamin
                </th>
                <th className="border ps-2 pe-40 bg-[#E5E5E5] border-slate-300">
                  Paslon
                </th>
              </tr>
            </thead>
            {dataVoter.map((items) => (
              <tbody>
                <tr className="bg-white">
                  <td className="py-2 text-center border border-slate-300">
                    {items.no}
                  </td>
                  <td className="border ps-2 border-slate-300">{items.nama}</td>
                  <td className="border ps-2 border-slate-300">
                    {items.alamat}
                  </td>
                  <td className="border ps-2 border-slate-300">
                    {items.gender}
                  </td>
                  <td className="border ps-2 border-slate-300 text-blue-700">
                    {items.paslon}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <p className="text-2xl font-bold">
          TOTAL SUARA TERKUMPUL : 1000 Voters
        </p>
      </div>
    </>
  );
};

export default DashboardPage;
