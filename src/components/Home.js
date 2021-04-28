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

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title><div className="d-flex justify-content-center">Lykkehjul</div></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex justify-content-center">

              Woohoo, prøv lykkehjulet og se om du er heldig!
              </div>
              <div className="mt-5">
                <Wheel />

              </div>
            </Modal.Body>

          </Modal>
        </Col>
      </Row>
    </Container>
  );
}