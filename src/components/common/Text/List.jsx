
import React from 'react';

const ListItem = ({ text }) => (
  <li className="border p-4 mb-2 bg-white rounded-md shadow-md">
    {text}
  </li>
);

const List = ({ items }) => (
  <ul className="list-none p-0">
    {items.map((item, index) => (
      <ListItem key={index} text={item} />
    ))}
  </ul>
);

export default List;