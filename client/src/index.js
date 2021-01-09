import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/Firebase';
import { storage } from './firebase';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const ReactFirebaseFileUpoad = () => {
  const [image, setImage] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {

    }
  };

  const handleUpload = () => {};

  return (
    <div>
      Hi all!
      <br />
    </div>
  );
};

render(<ReactFirebaseFileUpoad />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
