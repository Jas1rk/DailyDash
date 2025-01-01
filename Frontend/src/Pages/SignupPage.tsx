import logo from '../assets/logo.png'
import { DarkModeToggle,  Signup } from '../Components'

const SignupPage = () => {
  return (
    <div className="w-screen min-h-screen">
    <div className="flex justify-between items-center p-5">
      <div className="flex items-start">
        <img src={logo} className="w-[30px] md:w-[40px]" />
        <h1 className="text-xl  font-semibold dark:text-white">ailyDash</h1>
      </div> 
      <DarkModeToggle />
    </div>
    <div className="w-screen grid place-items-center pb-10 md:py-0">
      <Signup />
    </div>
  </div>
  )
}

export default SignupPage