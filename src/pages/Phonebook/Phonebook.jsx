import { FormContacts } from 'components/FormContacts/FormContacts';
import css from './Phonebook.module.css';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { ContactList } from 'components/ContactList/ContactList';

export const Phonebook = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className="">Phonebook 📞</h1>
        <FormContacts />
        <h2>Contacts</h2>
        <FilterContact />
        <ContactList />
      </div>
    </>
  );
};
