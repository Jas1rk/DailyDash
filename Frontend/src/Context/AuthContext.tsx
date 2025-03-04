import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { EmployType } from "../Types/type";

type AuthContextType = {
  setUserData: () => void;
  userData: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [employData, setEmployData] = useState(() => {
    const storedEmploy = localStorage.getItem("employData");
    return storedEmploy ? JSON.parse(storedEmploy) : null;
  });

  useEffect(() => {
    if (employData) {
      localStorage.setItem("employData", JSON.stringify(employData));
    } else {
      localStorage.removeItem("employData");
    }
  }, [employData]);

  return (
    <AuthContext.Provider value={{ employData, setEmployData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
