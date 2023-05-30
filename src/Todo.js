/*global chrome*/
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from "./index.css"

function Todo() {
    const [todos, setTodos] = useState([]);

    function addTodo(newTodo) {
        setTodos([...todos, newTodo]);
        console.log(todos)
        chrome.storage.local.set({ 'todos': todos}).then(() => {
            console.log("Value is set to ");
            console.log(todos);
          });

        chrome.storage.local.get('todos').then((result) => {
            console.log("Value currently is ");
            console.log(result);
          });
    }

    function removeTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='bg-teal-200 flex items-center justify-center h-100 w-full'>
            <div className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'>
                <div className='mb-4'><h1 className='text-gray-950'>To-Do List</h1>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} />
                </div>
            </div>
        </div>
    );
}

export default Todo;
