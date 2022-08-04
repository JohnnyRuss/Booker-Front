import { createRoot } from 'react-dom/client';
import SearchProvider from './context/SearchContext';
import AuthProvider from './context/AuthContext';
import App from './App';
import './styles/index.scss';

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
);
