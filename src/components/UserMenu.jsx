import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <ul className={css.userlist}>
        <li className={css.useritem}>
          <NavLink to="/contacts" className={css.navlink}>
            Contacts 📞
          </NavLink>
        </li>
        <p className={css.welcome}>Welcome: {user.name}</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </ul>
    </>
  );
};
