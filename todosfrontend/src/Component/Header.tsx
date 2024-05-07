import React from "react";
import { Navbar, Container } from "react-bootstrap";

function MenuHeadersExample() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        style={{ marginBottom: "20px" }}
      >
        <Container>
          <Navbar.Brand href="/list-todo">
            Todo Management Application
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuHeadersExample;
