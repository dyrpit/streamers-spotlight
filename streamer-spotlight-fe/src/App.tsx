import { Container, Toolbar } from '@mui/material';

import { Outlet } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ pt: 1, pb: 1, minHeight: '100vh' }}
      >
        <Toolbar />
        <Outlet />
      </Container>
    </>
  );
};

export default App;
