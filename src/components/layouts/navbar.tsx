import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InterfaceNavbar } from "../interface/inavbar.ts";
import logoDw from "../../assets/logo-dw.png";
import InputGroup from "../elements/inputGroup.tsx";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";
import axios from "axios";

const Navbar = (props: InterfaceNavbar) => {
  const { titleNavbar, listItem } = props;

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  const handleLogin = (): void => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const handleRegister = (): void => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const loginUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setOpenLogin(false);
  };

  // Register Proses
  const [dataUser, setDataUser] = useState({
    fullname: "",
    address: "",
    gender: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/user", dataUser);
      // navigate("/voting");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-black lg:px-36 py-6">
      <div className="logo flex items-center gap-5">
        <img src={logoDw} className="h-11" alt="" />
        <Link to="/">
          <h4 className="text-white font-bold text-2xl">{titleNavbar}</h4>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {listItem.map((item, index) => (
          <React.Fragment key={index}>
            <ul className="flex text-white gap-3" key={index}>
              <Link to={item.linkTo}>
                <li>{item.list}</li>
              </Link>
              {index < listItem.length - 1 && <li className="">|</li>}
            </ul>
          </React.Fragment>
        ))}

        {userLogin === false ? (
          <button
            id="btnLogin"
            className="btn-login bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
            onClick={() => setOpenLogin(true)}
          >
            LOGIN
          </button>
        ) : (
          <button className="rounded-full w-12 h-12 text-center  bg-white text-black p-3">
            M
          </button>
        )}
      </div>

      <ModalLogin
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      >
        <div className="flex justify-center  items-center">
          <div className="w-96">
            <h1 className="text-btn font-extrabold text-4xl my-10 text-center">
              LOGIN
            </h1>
            <form action="" className="mt-5">
              <InputGroup
                label="Username :"
                type="username"
                name="username"
                placeholder="example@gmail.com"
              ></InputGroup>
              <InputGroup
                label="Password :"
                type="password"
                name="password"
                placeholder="************"
              ></InputGroup>
              <button
                onClick={loginUser}
                className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md"
              >
                SUBMIT
              </button>
            </form>
            <p className="text-sm text-black text-center mt-10">
              Don't have an account?{" "}
              <button
                onClick={handleRegister}
                className="font-bold text-[#3B93A6] hover:text-green-900"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </ModalLogin>

      <ModalRegister
        open={openRegister}
        onClose={() => {
          setOpenRegister(false);
        }}
      >
        <div className="flex justify-center  items-center">
          <div className="w-96">
            <h1 className="text-btn font-extrabold text-4xl mb-8 text-center">
              REGISTER
            </h1>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-5">
                <label htmlFor="" className="block text-[#595959] font-bold">
                  Fullname :
                </label>
                <input
                  type="text"
                  className="border w-full px-4 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-2 focus:ring-[#595959]"
                  placeholder="John Doe"
                  name="fullname"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="" className="block text-[#595959] font-bold">
                  Address :
                </label>
                <input
                  type="text"
                  className="border w-full px-4 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-2 focus:ring-[#595959]"
                  placeholder="Jl.Jaya Raya"
                  name="address"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5 flex flex-col">
                <label htmlFor="" className="block text-[#595959] font-bold">
                  Gender :
                </label>
                <select
                  name="gender"
                  id=""
                  className="border w-full px-2 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-[#595959]"
                  onChange={handleSelect}
                >
                  <option selected disabled>
                    --- Choose ---
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="" className="block text-[#595959] font-bold">
                  Username :
                </label>
                <input
                  type="text"
                  className="border w-full px-4 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-2 focus:ring-[#595959]"
                  placeholder="johndoe123"
                  name="username"
                  onChange={handleInput}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="" className="block text-[#595959] font-bold">
                  Password :
                </label>
                <input
                  type="password"
                  className="border w-full px-4 py-2 rounded-md outline outline-1 outline-[#595959] focus:ring-2 focus:ring-[#595959]"
                  placeholder="************"
                  name="password"
                  onChange={handleInput}
                />
              </div>

              <button
                onClick={handleLogin}
                type="submit"
                className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md"
              >
                SUBMIT
              </button>
            </form>
            <p className="text-sm text-center mt-10">
              Have an account?{" "}
              <button
                onClick={handleLogin}
                className="font-bold text-[#3B93A6] hover:text-green-900"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </ModalRegister>
    </nav>
  );
};

export default Navbar;
