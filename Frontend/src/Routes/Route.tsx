import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.tsx";
import {
  Error_404,
  LoginSign_in,
  OTP,
  RegisterSign_up,
} from "../Components/index.ts";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/auth-sign-in", element: <LoginSign_in /> },
      { path: "/auth-sign-up", element: <RegisterSign_up /> },
      { path: "/auth-otp", element: <OTP /> },
    ],
    errorElement: <Error_404 />,
  },
]);
