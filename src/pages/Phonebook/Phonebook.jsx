import { FormContacts } from 'components/FormContacts/FormContacts';
import css from './Phonebook.module.css';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { ContactList } from 'components/ContactList/ContactList';

const Phonebook = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <FormContacts />
        <h2 className={css.title}>Contacts</h2>
        <FilterContact />
        <ContactList />
      </div>
    </>
  );
};
export default Phonebook;
