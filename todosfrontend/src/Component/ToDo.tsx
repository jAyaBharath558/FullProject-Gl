import React, { FormEvent, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import {
  createToDo,
  getToDoById,
  updateToDoById,
} from "../Service/ToDoService";

type RouteParam = {
  id: string;
};

const ToDo: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParam>();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<string>("");

  const saveOrUpdate = (e: FormEvent) => {
    e.preventDefault();

    const todo = { title, description, completed };

    if (id) {
      updateToDoById(Number(id), todo)
        .then(() => history.push("/updated-todo"))
        .catch((error) => console.log(error));
    } else {
      createToDo(todo)
        .then(() => history.push("/list-todo"))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    if (id) {
      getToDoById(Number(id)).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCompleted(response.data.completed);
      });
    }
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="mb-4">{id ? "Edit ToDo" : "Add New ToDo"}</h2>
          <Form onSubmit={(e) => saveOrUpdate(e)}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formCompleted">
              <Form.Label>Completed</Form.Label>
              <Form.Select
                value={completed}
                onChange={(e) => setCompleted(e.target.value)}
                required
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="primary">
              {id ? "Update" : "Submit"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
