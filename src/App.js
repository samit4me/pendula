import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faDotCircle, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import FormContainer from './FormContainer';
import logo from './logo.svg';
import './App.css';

library.add(faCircle, faDotCircle, faCheckCircle, faExclamationCircle)

function App() {
  const [formComplete, setFormComplete] = useState(false);

  return (
    <div className={`App ${formComplete ? 'excite' : ''}`}>
      <header className="App-header">
        <h2>Pendula - The Navigator</h2>
      </header>
      <main className="App-body">
        <FormContainer onComplete={() => setFormComplete(true)} />
      </main>
      <img src={logo} className="App-logo" alt="logo" onClick={() => setFormComplete(false)} />
    </div>
  );
}

export default App;
