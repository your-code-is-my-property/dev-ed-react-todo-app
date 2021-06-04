import React from 'react';

export default function Form({ setInputText, todos, setTodos, inputText }) {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        let todo = { text: inputText, completed: false, id: Date.now() };
        setTodos([...todos, todo]);
        setInputText("");
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
