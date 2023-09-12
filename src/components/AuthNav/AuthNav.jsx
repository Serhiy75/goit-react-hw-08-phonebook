import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.navlist}>
      <li className={css.navitem}>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </li>
      <li className={css.navitem}>
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};
