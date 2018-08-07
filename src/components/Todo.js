import react from 'react';

const todo = props => (
    <li id={props.id} onClick={() => props.remove(props.id)}>{props.text}</li>
);

export default todo;
