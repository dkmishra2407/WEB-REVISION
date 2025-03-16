import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');

  function handleSubmit() {
    if (!title || !id) {
      alert('Please enter both ID and Title');
      return;
    }

    props.setTodos([...props.todos, { id: Number(id), title, completed: false }]);

    // Clear input fields after submission
    setTitle('');
    setId('');
  }

  const [isclicked, setIsclicked] = useState(false);
  function handleClick() {
    setIsclicked(!isclicked);
  }

  return (
    <div>
      <h1 onClick={handleClick}>Add Todo</h1>
      {
        isclicked && (
            <>
            <input 
            type="text" 
            placeholder="Enter the ID" 
            value={id} 
            onChange={(e) => setId(e.target.value)}
            required 
            />
          <input 
            type="text" 
            placeholder="Enter the title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
          <input type="submit" value="Submit" onClick={handleSubmit} />
          
          </>
        )
      
    }
    </div>
  );

};

export default AddTodo;
