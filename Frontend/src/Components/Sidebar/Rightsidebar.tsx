import { useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Rightsidebar = () => {
  const [date, setDate] = useState();

  const handleDate = (selectedDate) =>
    setDate(selectedDate.toLocaleDateString());

  return (
    <div className="hidden md:block w-auto p-4 h-screen sticky place-items-end  border-l-2 border-colors-primaryYellow">
      <h1 className="text-2xl font-bold text-colors-darkComponent dark:text-white">
        Pick a Date
      </h1>
      <Calender
        className=" p-3 mt-1 "
        onChange={handleDate}
        value={date}
        minDate={new Date()}
      />
    </div>
  );
};

export default Rightsidebar;
