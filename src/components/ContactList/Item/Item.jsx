import css from './item.module.css';
import PropTypes from 'prop-types';
import { memo } from 'react';

import { FormButton } from 'components/shared/FormButton/FormButton';

const Item = ({ contact: { name, number, id }, removeContact }) => {
  return (
    <li className={css.item}>
      <p className={css.contactItem}>{name}</p>
      <p className={css.contactItem}>{number}</p>
      <FormButton onRemove={() => removeContact(id)} text="Delete" />
    </li>
  );
};

Item.propTypes = {
  removeContact: PropTypes.func,
};

export default memo(Item);
