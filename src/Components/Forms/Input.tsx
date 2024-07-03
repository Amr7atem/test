import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
};

const Input = ({ type, placeholder, register }: InputProps) => {
  return (
    <input
      className="w-72 rounded-full  px-4 py-2 text-black shadow-lg dark:text-black"
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
