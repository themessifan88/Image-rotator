import React, { useState } from 'react';
import ImageBoxContainer from './components/image-box-container';
import { rotateMatrixClockWise } from './utils/matrix-rotation';
import './App.scss';

function App() {
  const [matrix, setMatrix] = useState([
    [0, 16, 255],
    [8, 128, 32],
    [0, 0, 0]
  ]);
  const noOfRotation = 1;
  const handleClick = () => {
    setMatrix(rotateMatrixClockWise(matrix));
  }
  return (
    <div className="App">
      <ImageBoxContainer matrix={matrix} />
      <button className="btn-rotator" onClick={handleClick}>Rotate 90 Clockwise {noOfRotation} times</button>
    </div>
  );
}

export default App;
