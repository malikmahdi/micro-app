import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./app.tsx";
// import LoginPage from "./components/layouts/login.tsx";
import LoginPage from "./components/layouts/login.tsx";
import RegisterPage from "./components/layouts/register.tsx";
import HomeUnLogin from "./pages/user/home.tsx";
import FormPaslonPage from "./pages/admin/addPaslon.tsx";
import FormPartaiPage from "./pages/admin/addPartai.tsx";
import ListPaslonPage from "./pages/admin/listPartai.tsx";
import ListPartaiPage from "./pages/admin/listPartai.tsx";
import DashboardPage from "./pages/admin/dashboard.tsx";
import InfoPemiluPage from "./pages/user/infoPemilu.tsx";
import BeritaPage from "./pages/user/berita.tsx";
import ErrorPage from "./pages/error.tsx";
import CartPage from "./components/layouts/cart.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: <HomeUnLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form-paslon",
    element: <FormPaslonPage />,
  },
  {
    path: "/form-partai",
    element: <FormPartaiPage />,
  },
  {
    path: "/list-paslon",
    element: <ListPaslonPage />,
  },
  {
    path: "/list-partai",
    element: <ListPartaiPage />,
  },
  {
    path: "/info-pemilu",
    element: <InfoPemiluPage />,
  },
  {
    path: "/info-berita",
    element: <BeritaPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
