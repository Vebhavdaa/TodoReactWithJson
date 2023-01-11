import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import FormTodo from "./Components/FormTodo";
import TableTodo from "./Components/TableTodo";
import Topbar from "./Components/Topbar";

const api = `http://localhost:4141/todo`;

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState(null);


  //Load Data from api
  const loadData = async () => {
    try {
      let res = await axios.get(api);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);





//Handlers

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !task) {
      toast.warning("Please fill all the fields", { autoClose: 2000 });
      return;
    }
    if (editMode) {
      try {
        axios.put(`${api}/${userId}`, { Name: name, Task: task });
        setName("");
        setTask("");
        setEditMode(false);
        setUserId(null);
        toast.success("Task has been Updated", { autoClose: 800 });
        setTimeout(() => {
          loadData();
        }, 500);
        return;
      } catch (error) {
        console.log(error);
      }
    }
    try {
      axios.post(api, { id: new Date(), Name: name, Task: task });
      setName("");
      setTask("");
      toast.success("Task has been Added", { autoClose: 800 });
      setTimeout(() => {
        loadData();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    axios.delete(`${api}/${id}`);
    setTimeout(() => {
      loadData();
    }, 500);
    toast.success("Task has been Deleted", { autoClose: 800 });
  };

  const handleUpdate = (id) => {
    const singleTask = data.find((el) => el.id === id);
    setName(singleTask.Name);
    setTask(singleTask.Task);
    setEditMode(true);
    setUserId(id);
  };

  return (
    <div className="App">
      <ToastContainer />
      <Topbar/>

      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md={4}>
            <FormTodo
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              task={task}
              setTask={setTask}
              editMode={editMode}
            />
          </Col>
          <Col md={8}>
            <TableTodo
              data={data}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
