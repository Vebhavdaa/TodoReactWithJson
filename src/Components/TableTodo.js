import React from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";

const TableTodo = ({ data, handleDelete, handleUpdate }) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Task</th>
            <th>Added by</th>
            <th>Action</th>
          </tr>
        </thead>
        {data &&
          data.map((el, index) => {
            return (
              <tbody key={el.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.Task}</td>
                  <td>{el.Name}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        style={{ marginRight: "5px" }}
                        variant="secondary"
                        onClick={() => handleUpdate(el.id)}
                      >
                        UPDATE
                      </Button>
                      <Button
                        style={{ marginRight: "5px" }}
                        variant="danger"
                        onClick={() => handleDelete(el.id)}
                      >
                        DELETE
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </Table>
    </>
  );
};

export default TableTodo;
