import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';

const ActionButton = ({ onClickNo, onClickYes }) => {
  return (
    <div className="text-center my-3">
      <Button className="btn-action" variant="outline-danger" onClick={onClickNo}><FontAwesomeIcon icon={faTimes} size="2x" /></Button>
      <Button className="btn-action ml-4" variant="outline-success" onClick={onClickYes}><FontAwesomeIcon icon={faHeart} size="2x" /></Button>
    </div>
  );
};

export default ActionButton;