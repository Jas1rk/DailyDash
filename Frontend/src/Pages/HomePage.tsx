import { Home, Navbar , LeftSidebar, RightSidebar } from "../Components"


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex gap-5 ">
      <LeftSidebar/>
      <Home/>
      <RightSidebar/>
      </div>
    </div>
  )
}

export default HomePage