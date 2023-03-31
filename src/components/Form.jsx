import css from 'components/Form.module.css';
import { useInputContex } from './Context';

export const Form = ({ onSubmit }) => {
  const { nameValue, addName, numberValue, addNumber } = useInputContex();

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({
      name: nameValue,
      number: numberValue,
    });
    reset();
  };

  const reset = () => {
    addName('');
    addNumber('');
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        Name{' '}
        <input
          className={css.input}
          type="text"
          name="name"
          value={nameValue}
          onChange={e => addName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          className={css.input}
          name="number"
          value={numberValue}
          onChange={e => addNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};
