import react from 'react';

const todoForm = props => (
    <form>
        <label for='#task'>What do you have to do?</label>
        <input type='text' id='task' value={props.value}/>
        <button onClick={() => props.add(props.value)}>Add task to list!</button>
    </form>
);

export default todoForm;
