import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{ pt: 1, pb: 1, minHeight: '100vh' }}
    >
      <Outlet />
    </Container>
  );
};

export default App;
