import React from 'react';
import style from '../../css/TodoForm.css';

const TodoForm = props => (
    <form className = {style.TodoForm}>
        <label htmlFor='task'>What do you have to do?</label>
        <input type='text' id='task' value={props.value}/>
        <button onClick={() => props.add(props.value)}>Add task to list!</button>
    </form>
);

export default TodoForm;
