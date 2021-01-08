import React from "react";
import { withFirebase } from "../Firebase";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignOutButton = ({ firebase }) => (
  <FontAwesomeIcon icon={faSignOutAlt} onClick={firebase.doSignOut} style={{color: "white"}}/>
);

export default withFirebase(SignOutButton);
