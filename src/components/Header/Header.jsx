import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <header>
        <p>Welocome: {user.name}</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
