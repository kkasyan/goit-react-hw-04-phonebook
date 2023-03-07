import css from './contactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { FormButton } from 'components/shared/FormButton/FormButton';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const handleChange = e => {
    const { value, name } = e.currentTarget;

    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">
        Name
        <input
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <FormButton type="submit" text="Add contact" />
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default memo(ContactForm);
