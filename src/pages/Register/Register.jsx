import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    e.target.reset();
  };

  return (
    <div className={css.register}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 className={css.labeltitle}>Registration</h2>
        <div className={css.label}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={css.input}
          />
        </div>
        <div className={css.label}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className={css.input}
          />
        </div>
      </form>
      <button type="submit" className={css.button}>
        Register
      </button>
    </div>
  );
};

export default Register;
