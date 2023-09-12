import { Phonebook } from 'pages/Phonebook/Phonebook';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Home from 'pages/Home';
// import { Header } from './Header/Header';

// import { Route, Routes } from 'react-router-dom';
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <Register />
      <Login />
      <Phonebook />
    </>
  );
};
