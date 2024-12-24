import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage.tsx";
import {
  Error404,
  OTP,
  RegisterSignUp,
} from "../Components/index.ts";
import LoginPage from "../Pages/LoginPage.tsx";

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
      { path: "/auth-otp", element: <OTP /> },
    ],
    errorElement: <Error404 />,
  },
]);
