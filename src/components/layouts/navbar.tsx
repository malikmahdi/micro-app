import { useState } from "react";
import { Link } from "react-router-dom";
import logoDw from "../../assets/logo-dw.png";
import ModalLogin from "./modalLogin";
import InputGroup from "../elements/inputGroup.tsx";
import RegisterPage from "./register";
import ModalRegister from "./modalRegister";

type Props = {
  tittleNav: string;
};

const Navbar = (props: Props) => {
  const { tittleNav } = props;

  const [login, setLogin] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const pilihLogin = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setLogin(!login);
    setOpenLogin(false);
  };

  const [regist, setRegist] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const pilihRegister = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setRegist(!regist);
    setOpenRegister(false);
  };

  const handleModalRegist = () => {
    setOpenRegister(!openRegister);
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
    {
      linkTo: "/info-pemilu",
      link: "Voting",
    },
  ];

  return (
    <nav className="flex items-center justify-between bg-black lg:px-36 py-3 ">
      <div className="logo flex items-center gap-5">
        <img src={logoDw} className="h-11" alt="" />
        <h4 className="text-white font-bold text-2xl">{tittleNav}</h4>
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

        {login === false ? (
          <>
            <button
              id="btnLogin"
              className="btn-login bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
              onClick={() => setOpenLogin(true)}
            >
              LOGIN
            </button>
            <button
              id="btnLogin"
              className="btn-login bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
              onClick={() => setOpenRegister(true)}
            >
              REGISTER
            </button>
          </>
        ) : (
          <button className="rounded-full w-12 h-12 text-center  bg-white text-black p-3">
            M
          </button>
        )}
      </div>

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
              {/* <InputGroup
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
              ></InputGroup> */}

              <button className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md">
                SUBMIT
              </button>
            </form>
            <p className="text-sm text-center mt-10">
              Have an account?{" "}
              <button className="font-bold text-[#3B93A6] hover:text-green-900">
                Login
              </button>
            </p>
          </div>
        </div>
      </ModalRegister>
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
              {/* <InputGroup
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
              ></InputGroup> */}
              <button
                className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md"
                onClick={pilihLogin}
              >
                SUBMIT
              </button>
            </form>
            <p className="text-sm text-black text-center mt-10">
              Don't have an account?{" "}
              <button
                onClick={pilihRegister}
                className="font-bold text-[#3B93A6] hover:text-green-900"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </ModalLogin>
    </nav>
  );
};

export default Navbar;

// const [isLogin, setIsLogin] = useState(false);

//   const handleClick = () => {
//     setIsLogin(!isLogin);
//   };

//   const [onModal, setOnModal] = useState(false);

//   const handleModal = () => {
//     setOnModal(!onModal);
//   };

//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const [isRegisterForm, setIsRegisterForm] = useState(true);

//   return (
//     <nav className="flex justify-between bg-black lg:px-36 py-3 sm:px-5">
//       <div className="logo flex items-center gap-5">
//         <img src={logoDw} className="h-11" alt="" />
//         <h4 className="text-white font-bold text-2xl">
//           PEMILU PRESIDEN DUMBWAYS.ID
//         </h4>
//       </div>
//       <ul className="flex ml-auto items-center text-white gap-5">
//         <li>
//           <Link to="/form-partai">Partai</Link>
//         </li>
//         <li>|</li>
//         <li>
//           <Link to="/form-paslon">Paslon</Link>
//         </li>
//         <li>|</li>
//         <li>
//           <Link to="/info-pemilu">Voting</Link>
//         </li>
//         <li>
//           {/* {onModal ? (
//           <button
//             onClick={handleModal}
//             className="rounded-full w-12 h-12 text-center  bg-white text-black p-3"
//           ></button>
//         ) : (
//           <button
//             onClick={handleModal}
//             className="btn bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
//           >
//             LOGIN
//           </button>
//         )} */}
//         </li>
//         <li>
//           <button
//             onClick={handleModal}
//             id="btnLogin"
//             className="btn-login bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
//           >
//             LOGIN
//           </button>
//         </li>
//       </ul>
//       {onModal ? (
//         <div className="fixed w-full z-50 p-5 flex justify-center left-0 top-0">
//           <div className="bg-white border border-2 shadow-lg rounded-xl w-[50%] ">
//             {isLoginForm ? (
//               <LoginPage toggleForm={() => setIsLoginForm(false)} />
//             ) : (
//               <p></p>
//             )}
//             {isRegisterForm ? (
//               <RegisterPage toggleForm={() => setIsLoginForm(true)} />
//             ) : (
//               <p></p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h1></h1>
//       )}
//     </nav>
//   )
