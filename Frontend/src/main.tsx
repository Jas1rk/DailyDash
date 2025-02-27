import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Route";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


createRoot(document.getElementById("root")!).render(
  <>
    <GoogleOAuthProvider clientId={googleClientId}>
      <RouterProvider router={routes} />
      <App />
    </GoogleOAuthProvider>
  </>
);
