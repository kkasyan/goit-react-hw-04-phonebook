import css from './contactForm.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

// import { Input } from './Input/Input';
import { FormButton } from 'components/shared/FormButton/FormButton';

export class ContactForm extends Component {
  static defaultProps = { onSubmit: () => {} };

  static propTypes = { onSubmit: PropTypes.func };

  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    // const { name, number } = e.target.elements;
    onSubmit({ ...this.state });
    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;

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
  }
}
