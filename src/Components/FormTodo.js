import React from "react";
import { Button, Form } from "react-bootstrap";

const FormTodo = ({ handleSubmit, name, setName, task, setTask, editMode }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{marginTop:"10px"}}>
          <Form.Label style={{ textAlign: "left", display: "inherit" }}>
            <h6>Name</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{marginTop:"15px"}}>
          <Form.Label style={{ textAlign: "left", display: "inherit" }}>
          <h6>Task</h6>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <div className="d-grid gap-2 mt-2">
          <Button type="submit" variant="primary" size="lg">
            {editMode ? "Update" : "Submit"}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormTodo;
