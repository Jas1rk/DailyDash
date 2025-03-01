import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Route";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./Context/AuthContext.tsx";
import { LoadingProvider } from "./Context/LoaderContext.tsx";

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <>
    <GoogleOAuthProvider clientId={googleClientId}>
      <LoadingProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </LoadingProvider>
    </GoogleOAuthProvider>
  </>
);
