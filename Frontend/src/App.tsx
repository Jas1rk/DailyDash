import { Outlet, useLocation } from "react-router-dom";
import useDarkMode from "./Components/Common/useDarkMode";
import { useLoader } from "./Context/LoaderContext";
import { useEffect } from "react";
import { SpinnerLoading } from "./Components";
import useNetworkSpeed from "./Hooks/UseNetworkSpeed";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();
  const { loading, setLoading }: any = useLoader();
  const {loadingTime} = useNetworkSpeed()

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), loadingTime);
    return () => clearTimeout(timer);
  }, [location.pathname,loadingTime]);

  useDarkMode();

  return (
    <>
      {loading && <SpinnerLoading />}
      <Outlet />
      <Toaster/>
    </>
  );
}

export default App;
