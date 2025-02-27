import axios from "axios";
import { backendUrl } from "../Service/BackendUrl";

const useAuthHandler = () => {
  const googleLogin = async (credential: string | undefined): Promise<void> => {
    console.log("Google Credential Received:", credential);
    try {
        console.log("Sending request to:", `${backendUrl}/employ/google/auth`);
      const response = await axios.post(
        `${backendUrl}/employ/google/auth`,
        { token: credential },
        { withCredentials: true }
      );

      console.log(response, "here is the damn response");
    } catch (error) {
      console.log(error, "error is here");
    }
  };

  return googleLogin;
};

export default useAuthHandler;
