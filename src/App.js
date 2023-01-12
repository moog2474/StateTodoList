import './App.css';
import { useState } from 'react';
import Modal from "./components/Modal"

// id, title, checkbox
function App() {

  const init = {
    id: "",
    title: "",
    isDone: false
  }

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState(init)

  const addTask = () => {
    const newObj = {
      id: createId(),
      title: task,
      isDone: false,
    };
    const newArr = [...tasks];

    if (ID !== "0") {
      newArr.map((e) => {
        if (e.id === ID) {
          e.title = task;
        }
        return e;
      });
    } else {
      newArr.push(newObj);

    }
    setTasks(newArr);

    setTask("")
    setId("0");
    setModal(false)
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

  const handleModal = () => {
    setModal(!modal);
  }
  const handleEdit = (id, title, isDone) => {
    if (!isDone) {
      setTask(title);
      setId(id);
      setModal(true);
    }
  };

  const handleDelete = (id) => {
    const newArr = tasks.filter((e) => e.id !== id);
    setTasks(newArr);
  };

  function showDoneTotal() {
    const arr = tasks.filter((e) => e.isDone === true);
    setDoneTotal(arr.length);
  }

  const [doneTotal, setDoneTotal] = useState(0);

  function createId() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";

    let newStr =
      letters.split("")[Math.floor(Math.random() * 10 + 1)] +
      letters.split("")[Math.floor(Math.random() * 10 + 1)];

    let newNumber =
      num.split("")[Math.floor(Math.random() * 10 + 1)] +
      num.split("")[Math.floor(Math.random() * 10 + 1)];
    return newStr + newNumber
  }
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
              onChange={(e) =>
                setTask({ ...setObj, title: e.target.value })}
              placeholder="Таск аа оруулна уу" />
            <input type="hidden" value={ID} />
            {/* <button className="btn btn-primary" onClick={addTask}>
              Add
            </button> */}
            <button onClick={handleModal} className="btn btn-secondary">Modal</button>
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
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(e.id, e.title, e.isDone)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </div>
            ))}

        </div>
        {modal && (
          <Modal
            modal={modal}
            setModal={handleModal}
            task={task}
            id={ID}
            setTask={setTask}
            addTask={addTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
