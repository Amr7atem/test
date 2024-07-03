import { FieldError } from 'react-hook-form';

const InputError = ({ error }: { error: FieldError | undefined }) => {
  return <span className="text-red-600	">{error?.message}</span>;
};

export default InputError;
