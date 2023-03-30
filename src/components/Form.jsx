import { createContext, useContext, useState } from 'react';

import css from 'components/Form.module.css';
import Context from './Context';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  console.log('number', number);

  const handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name{' '}
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
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
          value={number}
          onChange={e => setNumber(e.target.value)}
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
