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
        <h2 className={css.title}>Login form</h2>
        <div className={css.label}>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className={css.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
