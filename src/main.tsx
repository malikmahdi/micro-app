import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeUnLogin from "./pages/user/home.tsx";
import FormPaslonPage from "./pages/admin/addPaslon.tsx";
import FormPartaiPage from "./pages/admin/addPartai.tsx";
import ListPaslonPage from "./pages/admin/listPaslon.tsx";
import ListPartaiPage from "./pages/admin/listPartai.tsx";
import DashboardPage from "./pages/admin/dashboard.tsx";
import InfoPemiluPage from "./pages/user/infoPemilu.tsx";
import BeritaPage from "./pages/user/berita.tsx";
import ErrorPage from "./pages/error.tsx";
import FormArticlePage from "./pages/admin/addArtcile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUnLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/form-article",
    element: <FormArticlePage />,
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
    path: "/voting",
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
