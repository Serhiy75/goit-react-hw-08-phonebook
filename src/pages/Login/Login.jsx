import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(
      login({
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <div className={css.login}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter passwoerd"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
