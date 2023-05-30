import React from 'react';
import styles from "./index.css"

function TodoForm(props) {
    const { addTodo } = props;

    function handleSubmit(event) {
        event.preventDefault();
        const newTodo = event.target.elements.todo.value;
        addTodo(newTodo);
        event.target.reset();
    }

    return (
        <div class="flex mt-4">
            <form className='flex mt-4' onSubmit={handleSubmit}>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker' type="text" name="todo" />
                <button className='flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-500' type="submit">Add</button>
            </form>
        </div>
    );
}

export default TodoForm;
