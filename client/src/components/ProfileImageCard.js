import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardGroup, Button } from 'react-bootstrap';

const ProfileImageCard = ({photos}) => {
    return (
        <CardGroup>
            {photos.map((photo, idx) => (
                <Card key={idx}>
                    <Card.Img variant="top" src={photo} width="200px" height="200px" style={{ objectFit: "cover" }} />
                </Card>
            ))}
        </CardGroup>
    );
};

export default ProfileImageCard;