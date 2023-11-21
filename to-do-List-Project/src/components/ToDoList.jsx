import React, { useState } from 'react';

export default function ToDoList() {
  const [createList, setCreateList] = useState(''); /*this is for creating a new List*/
  const [lists, setLists] = useState([]);   /*This is for toDo's in the lists List*/

  const handleAddNewList = () => {
    if (createList.trim() === '') {
      return; 
    }

    const newList = {  /* this is an object*/
      title: createList,    /* gets the title from the input in Create new List */
      todos: [],  /* this collets toDo's in an array*/
      newTodo: '',  /* this is storring the values */
    };

    setLists([...lists, newList]);
    setCreateList('');
  };



  const handleAddTodo = (listIndex) => {
    
    const updatedLists = [...lists];
    const newTodo = updatedLists[listIndex].newTodo.trim();

    if (newTodo !== '') {
      updatedLists[listIndex].todos = [...updatedLists[listIndex].todos, newTodo];
      updatedLists[listIndex].newTodo = ''; 
      setLists(updatedLists);
    }
  };


  /* The Delete List and delete li from to Do's buttons*/
  /*Different styling for different buttons here I guess, Thanks Rebekka, you are the best! */

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

  return (
    <div className = "bigContainer" >
      <div className = "newList-container">
        <h1>Add new List</h1>
        <input
          type="text"
          value={createList}
          onChange={(e) => setCreateList(e.target.value)}
        />
        <button onClick={handleAddNewList}>Add list</button>
      </div> 

      <div className = "container-flex">
      {lists.map((list, listIndex) => (
        <div className ="flex" key={listIndex}>
          <div className='h2AndButton'>
        <h2 contentEditable="true"> {/*here it makes the titles editable*/}
            {list.title} 
          </h2> 
          <button className = "deleteListButton" onClick={() => handleDeleteList(listIndex)}>X</button>
          </div>
          <form >
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
              
              <li key={todoIndex}> <input type="checkbox"></input>
                {task}{' '}
              
                <button
                  onClick={() => handleRemoveTodo(listIndex, todoIndex)}
                  type="button"
                >
                  Remove
                </button>
                <button>Edit</button>
              
              </li>
            ))}
          </ul>
          
        </div>
        
      ))}
    </div>
    </div>
  );
}
