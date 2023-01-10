import './App.css';
import { useState } from 'react';

// id, title, checkbox
function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [delTask, setDelTask] = useState([]);

  const addTask = () => {
    const newObj = {
      id: tasks.length,
      title: task,
      isDone: false,
    };
    const newArr = [...tasks];
    newArr.push(newObj);
    setTasks(newArr);
    setTask("")
  }

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        val.isDone = !val.isDone;
        console.log(val);

        setDoneTotal(doneTotal + 1);
      }
      return val;
    });
    setTasks(objList);
    showDoneTotal();

  };

  function showDoneTotal() {
    const arr = tasks.filter((e) => e.isDone === true);
    setDoneTotal(arr.length);
  }

  const [doneTotal, setDoneTotal] = useState(0);



  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1>Todo List</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
          <div className='d-flex gap-3'>
            <input
              className="form-control"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Таск аа оруулна уу" />
            <button className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>


        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          {
            tasks.map((e) => (
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex one">
                  <input
                    type="checkbox"
                    checked={e.isDone}
                    onChange={() => onDoneTask(e.id)} />
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <button className="btn btn-warning">Edit</button>
                  {/* <button onClick={() => DelTask(e.id)} className="btn btn-danger">Delete</button> */}
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default App;
