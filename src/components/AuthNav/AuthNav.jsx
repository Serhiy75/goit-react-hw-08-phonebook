import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
