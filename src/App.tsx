import React from 'react';
import './App.css';
import FileUpload from './components/fileUpload/fileupload';
import MButton from './components/button/button'

function App() {
  return (
    <div className="App mt-5">
      <h1>Combine multiple PDFs into one</h1>
      <p>Merge PDFs online without downloading additional software.</p>
      <div className="border rounded ms-5 me-5">
        <FileUpload text="upload files" className="mt-5 mb-5" fileFormats="application/pdf" />
      </div>
    </div>
  );
}

export default App;
