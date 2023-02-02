import css from './item.module.css';
import PropTypes from 'prop-types';

import { FormButton } from 'components/shared/FormButton/FormButton';

export const Item = ({ contact: { name, number, id }, removeContact }) => {
  return (
    <>
      <p className={css.contactItem}>{name}</p>
      <p className={css.contactItem}>{number}</p>
      <FormButton onRemove={() => removeContact(id)} text="Delete" />
    </>
  );
};

Item.propTypes = {
  removeContact: PropTypes.func,
};
