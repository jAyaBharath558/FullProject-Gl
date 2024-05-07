import React, { FormEvent, useEffect, useState } from "react";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {
  completeTodo,
  deleteToDoById,
  getAllToDo,
  inCompleteTodo,
  updateToDoById,
} from "../Service/ToDoService";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: string;
};

const ListToDo: React.FC = () => {
  const history = useHistory();
  const [todo, setTodo] = useState<Todo[]>([]);

  const updateToDo = (id: number) => {
    history.push(`/edit-todo/${id}`);
  };

  const fetchToDoList = () => {
    getAllToDo()
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ToDo list:", error);
      });
  };

  const removeToDo = (id: number) => {
    deleteToDoById(id)
      .then(() => fetchToDoList())
      .catch((error) => console.error("Error deleting ToDo:", error));
  };

  const handleComplete = (id: number) => {
    completeTodo(id)
      .then(() => fetchToDoList())
      .catch((error) => console.error("Error completing ToDo:", error));
  };

  const handleIncomplete = (id: number) => {
    inCompleteTodo(id)
      .then(() => fetchToDoList())
      .catch((error) =>
        console.error("Error marking ToDo as incomplete:", error)
      );
  };

  useEffect(() => {
    fetchToDoList();
  }, []);

  return (
    <Container className="mt-5" style={{ marginBottom: "60px" }}>
      <Row>
        <Col>
          <h1 style={{ color: "#007BFF" }}>List of To-Dos</h1>
        </Col>
        <Col className="text-right">
          <Link to="/add-todo" className="btn btn-primary mb-2">
            Add ToDo
          </Link>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Todo Title</th>
            <th>Todo Description</th>
            <th>Todo Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td>
                <span
                  className={`badge ${
                    t.completed ? "bg-warning" : "bg-success"
                  }`}
                >
                  {t.completed ? "InCompleted" : "complete"}
                </span>
              </td>
              <td>
                <Button
                  variant="info"
                  className="mr-2"
                  onClick={() => updateToDo(t.id)}
                >
                  Update
                </Button>
                <Button variant="danger" onClick={() => removeToDo(t.id)}>
                  Delete
                </Button>
                {!t.completed && (
                  <Button
                    onClick={() => handleComplete(t.id)}
                    variant="primary"
                  >
                    Complete
                  </Button>
                )}
                {!t.completed && (
                  <Button
                    onClick={() => handleIncomplete(t.id)}
                    variant="warning"
                  >
                    Incomplete
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListToDo;
