import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const AddPhoto = () => {
    return (
        <Card class="card text-center bg-white" className="align-self-center">
            <h5 class="card-header">Add more photos</h5>
            <form>
                <div class="form-group" className="mt-4 mb-4">
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                </div>
            </form>
            <Button variant="primary">
                Upload Photo
            </Button>
        </Card>
    );
};

export default AddPhoto;
