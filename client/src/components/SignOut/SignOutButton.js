import React from "react";
import { Link } from 'react-router-dom';
import { withFirebase } from "../Firebase";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignOutButton = ({ firebase }) => (
  <Link to="#" title="Sign out" alt="Sign out"><FontAwesomeIcon icon={faSignOutAlt} onClick={firebase.doSignOut} style={{color: "white"}} size="2x"/></Link>
);

export default withFirebase(SignOutButton);
