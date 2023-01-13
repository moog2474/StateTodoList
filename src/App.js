import './App.css';
import { useState } from 'react';
import Modal from "./components/Modal"
import List from "./components/List"

// id, title, checkbox
function App() {

  const init = {
    id: "",
    title: "",
    isDone: false
  }

  const [tasks, setTasks] = useState([]);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState(init)

  const addTask = (para) => {

    const newArr = [...tasks];
    newArr.push({ ...obj, id: createId() })

    setTasks(newArr);
    setModal(false)
    setObj(init)

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
  const handleEdit = (id, title) => {

    const arr = { ...obj, id: id, title: title }
    setObj.push(arr)

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
          <div className='d-flex gap-3 w-100 justify-content-between align-items-center'>
            <p>Total {tasks.length}</p>
            <p>Done {doneTotal}</p>
            <button onClick={handleModal} className="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <List
          tasks={tasks}
          onDoneTask={onDoneTask}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

        <Modal
          modal={modal}
          setModal={handleModal}
          id={ID}
          handleEdit={handleEdit}
          addTask={addTask}
          obj={obj}
          setObj={setObj}
        />

      </div>
    </div>
  );
}

export default App;
