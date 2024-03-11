import Navbar from "../../components/layouts/navbar";
// json
import listAdminNav from "../../json/listAdminNav.json";

const FormArticlePage = () => {
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
          <h1 className="text-btn font-extrabold text-5xl">ADD ARTICLE</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-3 mx-10">
            <form action="">
              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Title
                </label>
                <input
                  type=""
                  className="border w-full mt-2 px-4 py-3 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="John Doe"
                  name="John Doe"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Date
                </label>
                <input
                  type="date"
                  className="border w-full mt-2 px-4 py-3 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="00"
                  name="nomor-urut"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Image
                </label>
                <input
                  type=""
                  className="border w-full mt-2 px-4 py-3 rounded-xl outline outline-2 outline-[#595959]"
                  placeholder="John Doe"
                  name="John Doe"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor=""
                  className="text-2xl text-[#595959] font-semibold"
                >
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus, vero labore perspiciatis illo incidunt suscipit ut odit neque nam eveniet assumenda, expedita quos iusto quo atque rem esse vitae Accusantium ut enim ab officia sunt, quisquam nisi aut."
                  className="border w-full mt-2 px-4 py-2 h-32 rounded-xl outline outline-2 outline-[#595959]"
                ></textarea>
              </div>

              <div className="mt-10">
                <button className="bg-btn hover:bg-[#74711d] text-white text-[32px] font-bold px-8 py-4 w-full rounded-xl">
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

export default FormArticlePage;
