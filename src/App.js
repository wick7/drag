import React from 'react';
import './App.css';


function App() {

  let dragged;
  let tempItem = document.createElement('div')
  tempItem.className = "tempItem"

  const handleStart = (e) => {
    e.dataTransfer.setData('text/plain', null)
    dragged = e.target;
    e.target.style.opacity = .5;
  }

  const handleEnd = (e) => {
    e.target.style.opacity = 1;
    tempItem.parentNode.removeChild(tempItem);
    if (e.target.className === "col") {

    }
  }

  const handleEnter = (e) => {
    // if (e.target.className === "col") {
    //   e.target.style.background = "yellow";
    //   e.target.append(tempItem);
    // }
  }

  const handleOver = (e) => {
    console.log("##", e.target.className)
    e.preventDefault();
    if (e.target.className === "col") {
      e.target.offsetTop > 100 ? e.target.append(tempItem) : e.target.prepend(tempItem);
    }

  }

  // const handleTempDrop = (e) => {

  // }

  const handleLeave = (e) => {
    // e.preventDefault();
    // if (e.target.className === "col") {
    //   e.target.style.opacity = "";
    // }

  }

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.target.className === "col" || e.target.className === "tempItem") {
      console.log(e.target.parentNode)
      dragged.parentNode.removeChild(dragged);
      e.target.className === "col" ? e.target.prepend(dragged) : e.target.parentNode.prepend(dragged)
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
        onDragEnter={handleEnter}
        onDragLeave={handleLeave}
      >
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
            >4</div>
            <div
              draggable
              className="box"
            >5</div>
          </div>
          <div className="col">
            <div
              draggable
              className="box"
            >6</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
