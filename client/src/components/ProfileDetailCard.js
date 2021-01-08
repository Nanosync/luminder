import React from 'react';
import Card from 'react-bootstrap/Card';

const ProfileDetailCard = ({ header, text, className }) => {
  return (
    <Card className={className}>
      <Card.Header className="text-center font-weight-bold text-uppercase">{header}</Card.Header>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
  </Card>
  );
};

export default ProfileDetailCard;