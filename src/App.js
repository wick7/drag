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
  let tempItem = document.createElement('div')
  tempItem.className = "tempItem"

  const handleEnter = (e) => {

    if (e.target.className === "col") {
      e.target.style.background = "yellow";
      e.target.append(tempItem);
    }
  }

  const handleOver = (e) => {
    e.preventDefault();
    // let tempItem = '<div className="tempItem">Temp</div>'
    // if (e.target.className === 'col') {
    //   e.target.appendChild(tempItem);
    // }

  }

  const handleLeave = (e) => {
    if (e.target.className === "col") {
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
          { transform: 'scale(2.1)', color: 'yellow' },
        ], {
        // timing options
        duration: 700,
        iterations: 1,
        easing: 'cubic-bezier(0, 1.28, .74, .7)'
      }
      )

    }

  }


  return (
    <div className="App">
      <div className="header">Drag N Drop</div>
      <div className="container"
        onDrop={handleDrop}
        onDragStart={handleStart}
        onDragEnd={handleEnd}
        onDragOver={handleOver}
        onDragLeave={handleLeave}
        onDragEnter={handleEnter}>
        <div className="row">
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
        <div className="row">
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
    </div>
  );
}

export default App;
