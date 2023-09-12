import { Phonebook } from 'pages/Phonebook/Phonebook';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Home from 'pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Header } from './Header/Header';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// const Header = lazy(() => import('../components/Header'));
// const Home = lazy(() => import('pages/Home'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const Phonebook = lazy(() => import('pages/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresh ? (
    <p>Refreshing...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
