import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const API_KEY = 'd8KQPPxIQ5Pj2ht-jHO8eUabDnnafvh_loeq7drdlo6__4li0g';
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const uploadTask = (task) => {
    if (task.title !== '')
      fetch('/api/v1/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify([{ ...task }]),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Errrrror');
          }
          return res.json();
        })
        .then((data) => {
          const newTask = data.items[0];
          setList((prev) => [newTask, ...prev]);
        });
  };

  const getData = () => {
    fetch('/api/v1/task', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setList(result.items);
      });
  };

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
      title: task,
      isCompleted: false,
    };
    uploadTask(item);
    setTask('');
  }

  function changeStatus(id) {
    const newTaskList = list.map((el) => {
      if (el._uuid === id) {
        return { ...el, isCompleted: true };
      }
      return el;
    });
    setList(newTaskList);
  }

  function removeTask(id) {
    const newTaskList = list.filter((el) => el._uuid !== id);

    setList(newTaskList);
  }

  if (list.length) {
    return (
      <div className="app">
        <h1 className="title">TodoList: {list.length} </h1>

        <form onSubmit={onSubmithadler}>
          <input type="text" value={task} placeholder="Enter the task " onChange={(e) => setTask(e.target.value)} />
          <button>Send</button>
        </form>

        <section className="list-wrapper">
          <ul>
            <h3>Task in progress</h3>
            {list
              .filter((el) => !el.isCompleted)
              .map((el) => {
                return (
                  <li className="" key={el._uuid}>
                    {el.title} <button onClick={() => removeTask(el._uuid)}>Delete</button>{' '}
                    <button onClick={() => changeStatus(el._uuid)}>Complete</button>
                  </li>
                );
              })}
          </ul>
          <ul>
            <h3>Completed task</h3>
            {list
              .filter((el) => el.isCompleted)
              .map((el) => {
                return (
                  <li className="" key={el._uuid}>
                    {el.title} <button onClick={() => removeTask(el._uuid)}>Delete</button>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    );
  }
  return (
    <div className="app">
      <h1 className="title">TodoList: {list.length} </h1>

      <form onSubmit={onSubmithadler}>
        <input type="text" value={task} placeholder="Enter the task " onChange={(e) => setTask(e.target.value)} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
