import { useState } from "react";
import logoDw from "../../assets/logo-dw.png";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav className="flex justify-between bg-black px-36 py-3">
      <div className="logo flex items-center gap-5">
        <img src={logoDw} className="h-11" alt="" />
        <h4 className="text-white font-bold text-2xl">
          PEMILU PRESIDEN DUMBWAYS.ID
        </h4>
      </div>
      <ul className="flex items-center text-white gap-5">
        <li>
          <a href="">Partai</a>
        </li>
        <li>|</li>
        <li>
          <a href="">Paslon</a>
        </li>
        <li>|</li>
        <li>
          <a href="">Voting</a>
        </li>
        <li>
          {isLogin ? (
            <button
              onClick={handleClick}
              className="rounded-full w-12 h-12 text-center  bg-white text-black p-3"
            >
              M
            </button>
          ) : (
            <button
              onClick={handleClick}
              className="btn bg-white hover:bg-slate-200 text-black font-bold px-8 py-3 rounded-md"
            >
              LOGIN
            </button>
          )}
        </li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Navbar;
