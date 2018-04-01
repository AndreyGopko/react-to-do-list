import React from 'react';
import ListItem from '../list-item';

import './styles.css';

export default function TodoList(props) {
  const items = props.items.map((item, index) => {
    return (
      <ListItem key={index} item={item} index={index} removeItem={props.removeItem} markTodoDone={props.markTodoDone} />
    );
  });

  return (
    <ul className='list-group'>{items}</ul>
  );
}