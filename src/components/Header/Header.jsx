import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';
import css from './Header.module.css';

export const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigate}>
          <NavLink to="/" className={css.homelink}>
            Home
          </NavLink>
          {isLogin ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
