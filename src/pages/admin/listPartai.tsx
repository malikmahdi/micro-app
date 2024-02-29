import Navbar from "../../components/layouts/navbar";
import Monyet2 from "../../assets/monyet-2.png";

const ListPartaiPage = () => {
  return (
    <>
      <Navbar
        tittleNav="
          DASHBOARD PEMILU
          "
      />
      <div className="px-36">
        <div className="px-36 py-16">
          <div className="text-center mt-8">
            <h1 className="text-btn font-extrabold text-5xl">LIST PARTAI</h1>
          </div>
        </div>

        <div className="mt-5 mb-10 mx-auto text-center">
          <table className="w-full  border border-collapse table-auto border-slate-400 ">
            <thead className="">
              <tr className="bg-white   text-center">
                <th className="text-center py-3 bg-dasar border border-[#828282]">
                  No.Urut
                </th>
                <th className="text-center ps-2 bg-dasar  border border-[#828282]">
                  Logo
                </th>
                <th className="ps-2 bg-dasar  border border-[#828282]">
                  Ketua Umum
                </th>
                <th className="text-center ps-2 bg-dasar border border-[#828282]">
                  Visi & Misi
                </th>
                <th className="text-center ps-2 bg-dasar border border-[#828282]">
                  Alamat
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white">
                <td className="ps-2  border border-[#828282]">
                  <h5>1</h5>
                </td>
                <td className="ps-2 border border-[#828282]">
                  <div className="px-10 py-2">
                    <img
                      src={Monyet2}
                      className="h-32  bg-cover rounded-xl"
                      alt=""
                    />
                  </div>
                </td>
                <td className="ps-2 border border-[#828282]">
                  <h5>John Doe</h5>
                </td>
                <td className="ps-2 border border-[#828282]">
                  <ul className="list-disc list-inside text-left">
                    <li>Memindahkan Indonesia ke Isekai.</li>
                    <li>Nonton anime 3x sehari.</li>
                    <li>Melakukan peresapan pada budaya jepang.</li>
                  </ul>
                </td>
                <td className="ps-2 border border-[#828282] text-left">
                  <p>Jl.Swasembada Barat</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPartaiPage;