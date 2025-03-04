import axios from "axios";
import { backendUrl } from "../Service/BackendUrl";
import { useAuth } from "../Context/AuthContext";

const useAuthHandler = () => {
  const {setEmployData}:any = useAuth()
  const googleLogin = async (credential: string | undefined): Promise<void> => {
    console.log("Google Credential Received:", credential);
    try {
      const {data} = await axios.post(
        `${backendUrl}/employ/google/auth`,
        { token: credential },
        { withCredentials: true }
      );
      console.log(data, "here is the damn response");
  
      setEmployData(data.employ)
    } catch (error) {
      console.log(error, "error is here");
    }
  };

  return googleLogin;
};

export default useAuthHandler;
