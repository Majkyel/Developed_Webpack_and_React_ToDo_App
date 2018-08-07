import react from 'react';
import todo from './Todo.js'
import style from '../../css/TodoList.css'

const todoList = props => {
    
    const listElement = this.props.list.map(element => <todo id={element.id} remove={props.remove} text={element.text}/>);
    
    return (
        <div className = {style.TodoList}>
            <ul>{listElement}</ul>
        </div>
    )
};

export default todoList;
