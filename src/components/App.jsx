import { FormContacts } from './FormContacts/FormContacts';
import { FilterContact } from './FilterContact/FilterContact';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';

// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className="">Phonebook</h1>
      <Routes>
        <Route>
          <Route path="formContacts" element={<FormContacts />}>
            <h2>Contacts</h2>
          </Route>
          <Route path="filterContact" element={<FilterContact />} />
          <Route path="contactList" element={<ContactList />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
