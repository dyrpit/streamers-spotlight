import { Controller, useFormContext } from 'react-hook-form';

import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

import { StreamingPlatform } from '../interfaces/create-streamer.interface';

interface IProps {
  name: string;
  label: string;
  options: StreamingPlatform[];
}

const mapOptionsToChips = (selected: string[], options: StreamingPlatform[]) =>
  selected.map((s) => options.find((o) => o.id === s)?.name || '');

const SelectInput = ({ label, name, options }: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const isError = !!errors[name];

  return (
    <FormControl error={isError} fullWidth>
      <Controller
        name={name}
        control={control}
        rules={{
          validate: (v) => {
            if (v.length === 0) {
              return 'Choose at least one platform';
            }
          },
        }}
        render={({ field }) => (
          <>
            <InputLabel id={`${name}-label`}>{label}</InputLabel>
            <Select
              {...field}
              labelId={`${name}-label`}
              id={name}
              multiple
              value={field.value}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              onChange={(e) => field.onChange(e.target.value)}
              renderValue={(selected: string[]) => {
                const mappedForNames = mapOptionsToChips(selected, options);
                return (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {mappedForNames.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                );
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
            {isError && (
              <FormHelperText>{errors[name]?.message as string}</FormHelperText>
            )}
          </>
        )}
      />
    </FormControl>
  );
};

export default SelectInput;
