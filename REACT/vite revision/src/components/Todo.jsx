import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo , Ondelete}) => {
  const todoList = Array.isArray(todo) ? todo : [todo];

  return (
    <>
      {todoList.map((item) => (
        <>
        <h1 key={item.id}>{item.title}</h1>
        <button className='btn btn-sm btn-danger' onClick={() => {Ondelete(item.id)}}>Delete</button>
        </>
      ))}
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ]).isRequired,
};

Todo.defaultProps = {
  todo: [],
};

export default Todo;
