import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Snackbar,
  Slide,
  SlideProps,
} from '@mui/material';

import { useCreateStreamer } from '../api/streamers/createStreamer';

import TextInput from './TextInput';
import SelectInput from './SelectInput';

import { CreateStreamerFormData } from '../interfaces/create-streamer-interface';
import {
  initialCreateStreamerFormData,
  streamingPlatformsOptions,
} from '../constants/create-streamer-form';

const TransitionLeft = (props: SlideProps) => (
  <Slide {...props} direction="up" />
);

const CreateForm = () => {
  const [open, setOpen] = useState(false);
  const methods = useForm<CreateStreamerFormData>({
    defaultValues: initialCreateStreamerFormData,
  });
  const { handleSubmit, reset } = methods;

  const {
    mutate: createStreamer,
    isLoading,
    isSuccess,
    isError,
  } = useCreateStreamer();

  const handleFormSubmit = (data: CreateStreamerFormData) =>
    createStreamer(data);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isSuccess) {
      setOpen(true);
      reset(initialCreateStreamerFormData);
    }

    if (isError) {
      setOpen(true);
    }
  }, [isSuccess, isError, reset]);

  return (
    <>
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={{ width: 400, m: 'auto' }}
        >
          <Card>
            <CardHeader
              title="Submit a streamer"
              sx={{ textAlign: 'center' }}
            />
            <CardContent>
              <Grid container gap={4}>
                <Grid item xs={12}>
                  <TextInput label="Streamer name" name="name" />
                </Grid>
                <Grid item xs={12}>
                  <SelectInput
                    label="Streamer platforms"
                    name="platforms"
                    options={streamingPlatformsOptions}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    label="Streamer description"
                    name="description"
                    multiline
                  />
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: 150, ml: 'auto' }}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </FormProvider>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={TransitionLeft}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Streamer submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreateForm;
