import css from './contactList.module.css';
import PropTypes from 'prop-types';

import Item from './Item/Item';

export const ContactList = ({ items, removeContact }) => {
  const elements = items.map(item => (
    <Item key={item.id} removeContact={removeContact} contact={item} />
  ));
  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = { items: [] };
