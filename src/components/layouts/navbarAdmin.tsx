import { useState } from "react";
import { Link } from "react-router-dom";
import logoDw from "../../assets/logo-dw.png";
import InputGroup from "../elements/inputGroup.tsx";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";

type PropsAdm = {
  tittleNav: string;
};

const listNav = [
  {
    linkTo: "/form-partai",
    link: "Partai",
  },
  {
    linkTo: "/form-paslon",
    link: "Paslon",
  },
];

const NavbarAdmin = (props: PropsAdm) => {
  const { tittleNav } = props;

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [userLogin, setUserLogin] = useState(false);

  const handleLogin = (): void => {
    // e.preventDefault();
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const handleRegister = (): void => {
    // e.preventDefault();
    setOpenLogin(false);
    setOpenRegister(true);
  };

  const loginUser = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setUserLogin(!userLogin);
    setOpenLogin(false);
  };

  return (
    <nav className="flex items-center justify-between bg-black lg:px-36 py-6 ">
      <div className="logo flex items-center gap-5">
        <img src={logoDw} className="h-11" alt="" />
        <Link to="/dashboard">
          <h4 className="text-white font-bold text-2xl">{tittleNav}</h4>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {listNav.map((items, index) => (
          <ul className="flex text-white gap-3">
            <li>
              <Link to={items.linkTo}> {items.link} </Link>
            </li>
            {index < listNav.length - 1 && <li className="">|</li>}
          </ul>
        ))}

        {userLogin === false ? (
          <>
            <button
              id="btnLogin"
              className="btn-login bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
              onClick={() => setOpenLogin(true)}
            >
              LOGIN
            </button>
          </>
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
                className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md"
                onClick={loginUser}
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
            <form action="" className="mt-5">
              <InputGroup
                label="Fullname :"
                type="fullname"
                name="fullname"
                placeholder="John Doe"
              ></InputGroup>

              <InputGroup
                label="Address :"
                type="text"
                name="address"
                placeholder="Jl.Swaasembada"
              ></InputGroup>

              <InputGroup
                label="Jenis Kelamin"
                type="username"
                name="username"
                placeholder="example@gmail.com"
              ></InputGroup>

              <InputGroup
                label="Username :"
                type="username"
                name="username"
                placeholder="johndoe123"
              ></InputGroup>

              <InputGroup
                label="Password :"
                type="password"
                name="password"
                placeholder="************"
              ></InputGroup>

              <button className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md">
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

export default NavbarAdmin;
