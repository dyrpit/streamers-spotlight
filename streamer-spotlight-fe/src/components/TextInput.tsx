import { useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

interface IProps {
  label: string;
  name: string;
  multiline?: boolean;
}

const TextInput = ({ label, name, multiline }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name, { required: 'Cannot be empty' })}
      label={label}
      placeholder={label}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      multiline={multiline}
      fullWidth
    />
  );
};

export default TextInput;
