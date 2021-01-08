import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="text-center">Created in <a href="https://hacknroll.nushackers.org/" rel="noopener noreferrer" target="_blank">Hack&amp;Roll 2021</a> - by Benedict, Samuel, Shimin, Wanxian</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
}

export default Footer;
