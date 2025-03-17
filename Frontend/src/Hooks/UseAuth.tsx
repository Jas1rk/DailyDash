import axios from "axios";
import { backendUrl } from "../Service/BackendUrl";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAuthHandler = () => {
  const navigate = useNavigate();
  const { setEmployData }: any = useAuth();
  const googleLogin = async (credential: string | undefined): Promise<void> => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/employ/google/auth`,
        { token: credential },
        { withCredentials: true }
      );
      setEmployData(data.employ);
      if (data) navigate("/",{state:{message: data.message}});
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return googleLogin;
};

export default useAuthHandler;
