import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../list-item';

import './styles.css';

export default function TodoList(props) {
  const { items, removeItem, togleTodoDone } = props;
  const itemsList = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        item={item}
        removeItem={removeItem}
        togleTodoDone={togleTodoDone} />
    );
  });

  return (
    <ul className='list-group'>
      {itemsList}
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
  togleTodoDone: PropTypes.func.isRequired,
}