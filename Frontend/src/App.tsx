import { Outlet } from "react-router-dom";
import useDarkMode from "./Components/Common/useDarkMode";

function App() {
  useDarkMode()
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
