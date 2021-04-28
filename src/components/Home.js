import React, { useState } from "react";
import Wheel from "./Wheel";
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container fluid="lg">
      <Row>
        <Col>

          <div>
            <h2>Lykkehjul demo</h2>
            <p>
              Her er en simpel test af et lykkehjul i en modal.
          </p>

          </div>

          <Button variant="primary" onClick={handleShow}>
            Launch demo wheel
          </Button>

          <Modal contentClassName="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
              <div>
                <Wheel />

              </div>
            </Modal.Body>

          </Modal>
        </Col>
      </Row>
    </Container>
  );
}