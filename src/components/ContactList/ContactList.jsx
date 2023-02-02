import css from './contactList.module.css';
import PropTypes from 'prop-types';

import { Item } from './Item/Item';

export const ContactList = ({ items, removeContact }) => {
  return (
    <>
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id} className={css.item}>
            <Item contact={item} removeContact={removeContact} />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.defaultProps = { items: [] };

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
