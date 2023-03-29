import css from 'components/PhonebookList.module.css';

export const PhonebookList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list_item}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.list_el} key={id}>
          <p className={css.list_title}>
            {name}:{number}
          </p>
          <button
            type="button"
            className={css.list_btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
