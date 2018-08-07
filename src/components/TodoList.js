import React from 'react';
import Todo from './Todo.js'
import style from '../../css/TodoList.css'

const TodoList = props => {
    
    const listElement = props.list.map(element => (
        <Todo id={element.id} key={element.id} remove={props.remove} text={element.text}/>)
    );
    
    return (
        <div className={style.TodoList}>
            <ol>{listElement}</ol>
        </div>
    )
}

export default TodoList;
