import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type LoadingType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoader = () => useContext(LoadingContext);
