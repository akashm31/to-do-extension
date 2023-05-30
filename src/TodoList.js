import React from 'react';
import styles from "./index.css"

function TodoList(props) {
    const { todos, removeTodo } = props;

    return (
                <ul >
                    {todos.map((todo, index) => (
                        <li className='flex items-center mb-4' key={index}>
                            <p className='text-grey-darkest w-full' >{todo}</p>
                            <button className='flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-400' onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
    );
}

export default TodoList;
