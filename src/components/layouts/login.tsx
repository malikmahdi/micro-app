import { Link } from "react-router-dom";
import InputGroup from "../elements/inputGroup";
interface LoginProps {
  toggleForm: () => void;
}

interface handleAuth {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginPage = (props: handleAuth) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md">
        <h1 className="text-btn font-extrabold text-4xl my-10 text-center">
          LOGIN
        </h1>
        <form onSubmit={(e) => props.login(e)} action="" className="mt-5">
          <InputGroup
            label="Username :"
            type="username"
            name="username"
            placeholder="example@gmail.com"
            onChange={props.handle}
          ></InputGroup>
          <InputGroup
            label="Password :"
            type="password"
            name="password"
            placeholder="************"
            onChange={props.handle}
          ></InputGroup>

          <button
            type="submit"
            className="bg-btn hover:bg-[#74711d] text-white font-bold px-8 py-2 w-full rounded-md"
          >
            SUBMIT
          </button>
        </form>
        <p className="text-sm text-center mt-10">
          Don't have an account?{" "}
          <Link
            // onClick={toggleForm}
            to="/register"
            className="font-bold text-[#3B93A6] hover:text-green-900"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
