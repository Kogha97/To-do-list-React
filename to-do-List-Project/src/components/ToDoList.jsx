import React, { useState, useRef } from 'react';

export default function ToDoList() {
  const [createList, setCreateList] = useState('');
  const [lists, setLists] = useState([]);
  const inputRefs = useRef([]);

  const handleAddNewList = () => {
    if (createList.trim() === '') {
      return;
    }

    const newList = {
      title: createList,
      todos: [],
      newTodo: '',
    };

    setLists([...lists, newList]);
    setCreateList('');
  };

  const handleAddTodo = (listIndex) => {
    const updatedLists = [...lists];
    const newTodo = updatedLists[listIndex].newTodo.trim();

    if (newTodo !== '') {
      updatedLists[listIndex].todos = [...updatedLists[listIndex].todos, { text: newTodo, editing: false }];
      updatedLists[listIndex].newTodo = '';
      setLists(updatedLists);
    }
  };

  const handleDeleteList = (listIndex) => {
    const updatedLists = [...lists];
    updatedLists.splice(listIndex, 1);
    setLists(updatedLists);
  };

  const handleRemoveTodo = (listIndex, todoIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].todos = updatedLists[listIndex].todos.filter((_, i) => i !== todoIndex);
    setLists(updatedLists);
  };

  const handleEditTodo = (listIndex, todoIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].todos[todoIndex].editing = true;
    setLists(updatedLists);

    // Focus the input field
    if (inputRefs.current[listIndex] && inputRefs.current[listIndex][todoIndex]) {
      inputRefs.current[listIndex][todoIndex].focus();
    }
  };

  const handleSaveEdit = (listIndex, todoIndex, newText) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].todos[todoIndex].text = newText;
    updatedLists[listIndex].todos[todoIndex].editing = false;
    setLists(updatedLists);
  };

  return (
    <div className="bigContainer">
      <div className="newList-container">
        <h1 id='add-list-h1'>Add a new list here:</h1>
        <span id='input-and-add-list'>
        <input
          type="text"
          value={createList}
          onChange={(e) => setCreateList(e.target.value)}
        />
        <button onClick={handleAddNewList}>Add list</button></span>
      </div>

      <div className="container-flex">
        {lists.map((list, listIndex) => (
          <div className="flex" key={listIndex}>
            <div className="h2AndButton">
              <h2 contentEditable="true">
                {list.title}
              </h2>
              <button className="deleteListButton" onClick={() => handleDeleteList(listIndex)}>X</button>
            </div>
            <form onSubmit={(e) => {
            e.preventDefault();
               handleAddTodo(listIndex);
               }}>
              <h4>Add ToDo's here: </h4>
              <input
                type="text"
                value={list.newTodo}
                onChange={(e) => {
                  const updatedLists = [...lists];
                  updatedLists[listIndex].newTodo = e.target.value;
                  setLists(updatedLists);
                }}
              />
              <button type="button" onClick={() => handleAddTodo(listIndex)}>
                Add task
              </button>
            </form>
          
            <ul>
              {list.todos.map((task, todoIndex) => (
               <li key={todoIndex} >

            <div style={{ textDecoration: task.checked ? 'line-through' : 'none', flex: 1 }}>
                 <input
                type="checkbox"
                 checked={task.checked || false}
                 onChange={() => {
                  const updatedLists = [...lists];
                   updatedLists[listIndex].todos[todoIndex].checked = !task.checked;
                 setLists(updatedLists);
                 }}
                />
                {task.editing ? (
                <>
                <input
              type="text"
              value={task.text}
              ref={(el) => {
                if (!inputRefs.current[listIndex]) {
                  inputRefs.current[listIndex] = [];
                }
                inputRefs.current[listIndex][todoIndex] = el;
              }}
              onChange={(e) => {
                const updatedLists = [...lists];
                updatedLists[listIndex].todos[todoIndex].text = e.target.value;
                setLists(updatedLists);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSaveEdit(listIndex, todoIndex, task.text);
                }
              }}
            />
          </>
        ) : (
          <>
            {task.text}
          </>
        )}
      </div>
      <div>
        <button onClick={() => handleRemoveTodo(listIndex, todoIndex)} type="button">
          Remove
        </button>
        <button onClick={() => handleEditTodo(listIndex, todoIndex)} type="button">
          Edit
        </button>
      </div>
    </li>
  ))}
</ul>


          </div>
        ))}
      </div>
    </div>
  );
}
