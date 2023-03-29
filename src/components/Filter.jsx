import css from 'components/Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
