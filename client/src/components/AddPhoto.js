import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Form } from 'react-bootstrap';

const AddPhoto = () => {
    return (
        <Card className="text-center mt-4">
            <h5 className="card-header">Add a photo</h5>
            <Form>
                <Form.Group>
                    <Form.File id="profileFormControlFile1" />
                </Form.Group>
            </Form>
            <Button variant="primary">
                Upload Photo
            </Button>
        </Card>
    );
};

export default AddPhoto;
