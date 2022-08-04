import { Routes, Route } from 'react-router-dom';
import { Home, Hotel, HotelsList, LogIn, Register, RestrictAuthRoute } from './pages';
import { Navigation, Footer } from './components';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
