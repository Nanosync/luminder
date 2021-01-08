import React from 'react';
import Card from 'react-bootstrap/Card';
import { CardGroup, Button } from 'react-bootstrap';
import UserPhoto1 from './unsplash-1.jpg';
import UserPhoto2 from './unsplash-2.jpg';
import UserPhoto3 from './unsplash-3.jpg';

const ProfileImageCard = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={UserPhoto1} width="200px" height="200px" style={{ objectFit: "cover" }} />
            </Card>
            <Card>
                <Card.Img variant="top" src={UserPhoto2} width="200px" height="200px" style={{ objectFit: "cover" }} />
            </Card>
            <Card>
                <Card.Img variant="top" src={UserPhoto3} width="200px" height="200px" style={{ objectFit: "cover" }} />
            </Card>
            <Card className="align-self-center">
                <Button variant="primary">Add More Photos</Button>
            </Card>
        </CardGroup>

    );
};

export default ProfileImageCard;