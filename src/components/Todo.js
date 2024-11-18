import React from 'react';

const Todo = ({todo, onDelete, toggleComplete}) => {
  return (
    <div className='d-f'>
        <div
          style={{textDecoration: todo.complete ? "line-through" : ""}}
          onClick={toggleComplete}>
          {todo.text}
        </div>
        <button className='delete-btn' onClick={onDelete}>X</button>
      </div>
      )
};

export default Todo