import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <ul>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <p>Welocome: {user.name}</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </ul>
    </>
  );
};
