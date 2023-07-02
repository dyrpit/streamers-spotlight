import { Container } from '@mui/material';

import StreamersView from './views/StreamersView';

const App = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{ pt: 1, pb: 1, minHeight: '100vh' }}
    >
      <StreamersView />
    </Container>
  );
};

export default App;
