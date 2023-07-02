import { Container, Divider } from '@mui/material';
import CreateForm from '../components/CreateStreamerForm';
import StreamerList from '../components/StreamersList';

const StreamersView = () => {
  return (
    <Container maxWidth="md">
      <CreateForm />
      <Divider />
      <StreamerList />
    </Container>
  );
};

export default StreamersView;
