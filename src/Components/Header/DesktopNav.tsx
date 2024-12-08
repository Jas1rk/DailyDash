import Button from "../Common/Button";
import Input from "../Common/Input";

type Items = {
  title: string;
};

const navItems: Items[] = [
  { title: "Home" },
  { title: "Tasks" },
  { title: "Settings" },
];

const DesktopNav = () => {
  return (
    <header className="bg-[#1A1A1D] text-white fixed w-full z-50  shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-4 ">
        <h1 className="text-lg">DailyDash</h1>
        <Input
          className=" p-2 rounded-full bg-black focus:outline-none focus:ring-1 focus:ring-[#f83c86]"
          placeholder="search task..."
          type="search"
        />
        <ul className="flex gap-5">
          {navItems.map((data, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-600 font-sans text-sm py-2 px-4 rounded-md transition duration-200 ease-in-out hover:text-[#f83c86] overflow-hidden"
            >
              {data.title}
            </li>
          ))}
        </ul>

        <Button>sign-in</Button>
      </nav>
    </header>
  );
};

export default DesktopNav;
