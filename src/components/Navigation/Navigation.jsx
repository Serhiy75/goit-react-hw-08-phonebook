import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLogin } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/home">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
