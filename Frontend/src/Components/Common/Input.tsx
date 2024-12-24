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
        className={`w-full  font-light bg-colors-whiteScreen dark:bg-colors-blackScreen placeholder:text-colors-primaryYellow mt-2 py-2 px-2 outline-none  ${className}`}
      >
        {icon && <span>{icon}</span>}
        <input
          placeholder={placeholder}
          type={type}
          className="bg-transparent outline-none  "
        />
      </div>
    </>
  );
};

export default Input;
