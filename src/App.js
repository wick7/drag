import React from 'react';
import './App.css';


function App() {

  let dragged;

  const handleStart = (e) => {
    e.dataTransfer.setData('text/plain', null)
    dragged = e.target;
    e.target.style.opacity = .5;
  }

  const handleEnd = (e) => {
    e.target.style.opacity = '';
  }

  const handleEnter = (e) => {
    if (e.target.className === "dropzone") {
      e.target.style.background = "";
    }
  }

  const handleOver = (e) => {
    e.preventDefault();
  }

  const handleLeave = (e) => {
    if (e.target.className === "dropzone") {
      e.target.style.background = "";
    }
  }

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.target.className === "col") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      dragged.animate(
        [
          // keyframes
          { transform: 'scale(1.1)' },
        ], {
        // timing options
        duration: 450,
        iterations: 1,
        easing: 'ease-out'
      }
      )

    }

  }


  return (
    <div className="App">
      <div className="container"
        onDrop={handleDrop}
        onDragStart={handleStart}
        onDragEnd={handleEnd}
        onDragOver={handleOver}
        onDragLeave={handleLeave}
        onDragEnter={handleEnter}>
        <div className="col">
          <div
            draggable
            className="box"
          >1</div>
          <div
            draggable
            className="box"
          >2</div>
        </div>
        <div className="col">
          <div
            draggable
            className="box"
          >3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
