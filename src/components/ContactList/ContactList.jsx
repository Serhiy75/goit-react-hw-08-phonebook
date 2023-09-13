import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContact } from 'redux/contacts/operations';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalazeFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalazeFilter)
    );
  };

  const filterContact = getFilterContact();

  return (
    <ul className={css.listname}>
      {filterContact.map(({ id, name, number, phone }) => {
        return (
          <li key={id} className={css.listitem}>
            <span>
              {name}: {number} {phone}
            </span>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={css.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
