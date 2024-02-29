// import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import React, { ChangeEvent } from "react";
// import IAuth from "./components/interface/iauth";
// import LoginPage from "./components/layouts/login";
// import DashboardPage from "./pages/admin/dashboard";
// import HomeUnLogin from "./pages/user/home";
// import BeritaPage from "./pages/user/berita";
// import FormPartaiPage from "./pages/admin/addPartai";
// import ListPartaiPage from "./pages/admin/listPartai";
// import ListPaslonPage from "./pages/admin/listPaslon";
// import InfoPemiluPage from "./pages/user/infoPemilu";

// const App: React.FC = () => {
//   const navigate = useNavigate();
//   const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false);
//   const [isLogin, setIsLogin] = React.useState<boolean>(false);
//   const [form, setForm] = React.useState<IAuth>({
//     username: "",
//     password: "",
//   });

//   function handleSetForm(event: ChangeEvent<HTMLInputElement>): void {
//     setForm({
//       ...form,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function login(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     if (form.username === "admin" && form.password === "admin") {
//       setIsLoginAdmin(true);
//     } else if (
//       form.username !== "" &&
//       form.password !== "" &&
//       form.username !== "admin" &&
//       form.password !== "admin"
//     ) {
//       setIsLogin(true);
//     }
//   }

//   React.useEffect(() => {
//     navigate("/home");
//   }, [isLogin]);

//   React.useEffect(() => {
//     navigate("/admin");
//   }, [isLoginAdmin]);

//   function PrivateRoute() {
//     if (isLogin) {
//       return <Outlet />;
//     } else {
//       return <Navigate to="/login" />;
//     }
//   }

//   function PrivateRouteAdmin() {
//     if (isLoginAdmin) {
//       return <Outlet />;
//     } else {
//       return <Navigate to="/login" />;
//     }
//   }

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/login"
//           element={<LoginPage handle={handleSetForm} login={login} />}
//         />

//         <Route path="/" element={<PrivateRouteAdmin />}>
//           <Route path="/admin" element={<DashboardPage />} />
//         </Route>

//         <Route path="/" element={<PrivateRoute />}>
//           <Route path="/home" element={<HomeUnLogin />} />
//         </Route>

//         <Route path="/info-berita" element={<BeritaPage />} />
//         <Route path="/info-pemilu" element={<InfoPemiluPage />} />
//         <Route path="/add-partai" element={<FormPartaiPage />} />
//         <Route path="/add-paslon" element={<FormPartaiPage />} />
//         <Route path="/list-partai" element={<ListPartaiPage />} />
//         <Route path="/list-paslon" element={<ListPaslonPage />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
