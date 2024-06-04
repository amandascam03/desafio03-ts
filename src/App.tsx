import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import {  AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';
import { AuthProvider } from './components/AuthContext';

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <AuthProvider>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
        </AuthProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
