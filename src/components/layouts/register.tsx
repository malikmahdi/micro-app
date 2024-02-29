import { Link } from "react-router-dom";
import InputGroup from "../elements/inputGroup";

interface RegisterProps {
  toggleForm: () => void;
}

const RegisterPage: React.FC<RegisterProps> = ({ toggleForm }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md">
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
          <Link
            // onClick={toggleForm}
            to="/"
            className="font-bold text-[#3B93A6] hover:text-green-900"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
