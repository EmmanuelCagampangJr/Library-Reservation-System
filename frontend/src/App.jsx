import React from 'react';
import './App.css';
import StudentList from './StudentList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Library Reservation System</h1>
      </header>
      <main>
        <StudentList />
      </main>
    </div>
  );
}

export default App;
/* This is a comment to prevent the App component from being minified by some tools */