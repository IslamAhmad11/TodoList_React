import {React, useState} from 'react';
import shortid from 'shortid';

const TodoForm = ({onSubmit}) => {

    let [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(text && text !== " "){
          onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false,
          });
        }
        setText("");
    };

    const handleChange = (e) => {
      setText(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input className='input-field' type='text' onChange={handleChange} value={text} placeholder='Please add a task'/>
        <button className='btn' onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoForm
