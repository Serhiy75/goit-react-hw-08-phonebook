import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/selectors';
// import css from './Header.module.css';

export const Header = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLogin ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
