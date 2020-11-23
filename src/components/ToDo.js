import React from 'react';

const ToDo = ({ id, todo, text, completed }) => {
  return (
    <li>
      {text}
      {todo}
    </li>
  )
}

export default ToDo;
