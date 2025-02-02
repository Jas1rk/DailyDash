type Input = {
  icon?: React.ReactNode;
  className?: string;
  placeholder: string;
  type: string;
};

const Input = ({ className, placeholder, type, icon }: Input) => {
  return (
    <>
      <div
        className={`w-full flex gap-2 items-center   font-light bg-colors-lightComponent dark:bg-colors-darkComponent text-colors-primaryYellow mt-2 py-2 px-2 outline-none  ${className}`}
      >
        {icon && <span>{icon}</span>}
        <input
          placeholder={placeholder}
          type={type}
          className="bg-transparent outline-none "
        />
      </div>
    </>
  );
};

export default Input;
