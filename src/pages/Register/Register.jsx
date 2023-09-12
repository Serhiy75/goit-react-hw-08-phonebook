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
        <label className={css.label}>
          Username
          <input name="name" type="text" placeholder="Enter name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
