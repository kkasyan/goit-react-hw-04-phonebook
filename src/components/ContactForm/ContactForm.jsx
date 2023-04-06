import css from './contactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { memo, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { FormButton } from 'components/shared/FormButton/FormButton';
import { fields } from './fields';

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

  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">
        Name
        <input
          name="name"
          id={nameId}
          value={name}
          onChange={handleChange}
          {...fields.name}
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          name="number"
          id={numberId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          {...fields.number}
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
