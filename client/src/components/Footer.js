import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="text-center">made for hack n roll 2021</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
}

export default Footer;
