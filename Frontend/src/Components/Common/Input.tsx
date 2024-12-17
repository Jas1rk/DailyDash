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
        className={`p-2 text-gray-500 bg-black focus:outline-none focus:ring-1 focus:ring-[#f83c86]${className}`}
      >
        {icon && <span>{icon}</span>}
        <input placeholder={placeholder} type={type} className="bg-transparent outline-none " />
      </div>
    </>
  );
};

export default Input;
