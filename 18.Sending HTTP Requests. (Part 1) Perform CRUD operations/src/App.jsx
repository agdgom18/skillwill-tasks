import './App.css';

import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function onSubmithadler(e) {
    e.preventDefault();
    addTask();
  }

  function addTask() {
    if (!task) {
      alert('Enter the task');
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 100000),
      task: task,
      isComplited: false,
    };

    setList((prev) => [...prev, item]);
    setTask('');
  }

  function changeStatus(id) {
    const newTaskList = list.map((el) => {
      if (el.id === id) {
        return { ...el, isComplited: true };
      }
      return el;
    });
    setList(newTaskList);
  }

  function removeTask(id) {
    const newTaskList = list.filter((el) => el.id !== id);
    setList(newTaskList);
  }
  return (
    <div className="app">
      <h1 className="title">TodoList: {list.length} </h1>

      <form onSubmit={onSubmithadler}>
        <input type="text" value={task} placeholder="Enter the task " onChange={(e) => setTask(e.target.value)} />
        <button>Send</button>
      </form>

      <section className="list-wrapper">
        {list && (
          <ul>
            <h3>Task in progress</h3>
            {list
              .filter((el) => !el.isComplited)
              .map((el) => {
                return (
                  <li className="" key={el.id}>
                    {el.task} <button onClick={() => removeTask(el.id)}>Delete</button> <button onClick={() => changeStatus(el.id)}>Complite</button>
                  </li>
                );
              })}
          </ul>
        )}
        <ul>
          <h3>Complited task</h3>
          {list
            .filter((el) => el.isComplited)
            .map((el) => {
              return (
                <li className="" key={el.id}>
                  {el.task} <button onClick={() => removeTask(el.id)}>Delete</button>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
}

export default App;
