import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
