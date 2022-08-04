import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function RestrictAuthRoute() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userExists =
      JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('refreshToken'));

    if (userExists) setUser(true);
  }, []);

  return user ? <Navigate to='/' /> : <Outlet />;
}

export default RestrictAuthRoute;
