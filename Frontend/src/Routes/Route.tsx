import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage.tsx";
import {
  Error404,
  RegisterSignUp,
} from "../Components/index.ts";
import LoginPage from "../Pages/LoginPage.tsx";
import OtpPage from "../Pages/OtpPage.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <RegisterSignUp /> },
      { path: "/auth-otp", element: <OtpPage /> },
    ],
    errorElement: <Error404 />,
  },
]);
