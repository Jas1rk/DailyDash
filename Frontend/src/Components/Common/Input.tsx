type Input = {
  icon?: React.ReactNode;
  className?: string;
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  placeholder,
  type,
  icon,
  name,
  value,
  onChange,
}: Input) => {
  return (
    <>
      <div
        className={`w-full flex gap-2 items-center   font-light bg-colors-lightComponent dark:bg-colors-darkComponent text-colors-primaryYellow mt-2 py-2 px-2  ${className}`}
      >
        {icon && <span>{icon}</span>}
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none  "
        />
      </div>
    </>
  );
};

export default Input;
