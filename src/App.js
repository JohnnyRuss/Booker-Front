import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, RestrictAuthRoute } from './pages';
import { Navigation, Footer } from './components';
import { Spinner } from './components/Layouts';

const Hotel = lazy(() => import('./pages/Hotel'));
const HotelsList = lazy(() => import('./pages/HotelsList'));
const LogIn = lazy(() => import('./pages/LogIn'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Navigation />
      <Routes>
        <Route element={<RestrictAuthRoute />}>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<HotelsList />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
