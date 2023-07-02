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
  CardActions,
} from '@mui/material';

import { useCreateStreamer } from '../api/streamers/create-streamer';

import TextInput from './TextInput';
import SelectInput from './SelectInput';

import { CreateStreamerFormData } from '../interfaces/create-streamer.interface';
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
          sx={{ pb: 4, pt: 4 }}
        >
          <Card>
            <CardHeader
              title="Submit a streamer"
              sx={{ textAlign: 'center' }}
            />
            <CardContent>
              <Grid container gap={1} justifyContent="space-evenly">
                <Grid item xs={12} md={3}>
                  <TextInput label="Streamer name" name="name" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectInput
                    label="Streamer platforms"
                    name="platforms"
                    options={streamingPlatformsOptions}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextInput
                    label="Streamer description"
                    name="description"
                    multiline
                  />
                </Grid>
              </Grid>
              <CardActions sx={{ p: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ minWidth: 150, m: 'auto' }}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" size={25} />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </CardActions>
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
