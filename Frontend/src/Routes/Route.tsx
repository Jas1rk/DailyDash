import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.tsx";
import {
  Error404,
  LoginSignIn,
  OTP,
  RegisterSignUp,
} from "../Components/index.ts";

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/auth-sign-in", element: <LoginSignIn /> },
      { path: "/auth-sign-up", element: <RegisterSignUp /> },
      { path: "/auth-otp", element: <OTP /> },
    ],
    errorElement: <Error404 />,
  },
]);
