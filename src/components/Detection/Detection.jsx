// 1. Install dependencies - DONE
// 2. Import dependencies - Done
// 3. Setup Webcam and canvas - 
// 4. Define references to those
// 5. Load handpose
// 6. Detect function
// 7. Drawing utilities from tensorflow
// 8. Draw function

import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";



const Detection = () => {

  return (
    <div className="App">
      <button className="toggle-button bg-green-500 pointer mt-4 p-2" >
        Start Detection
      </button>
      <header className="App-header flex justify-center mt-2 mb-1">
        <Webcam />
      </header>
    </div>
  )
}

export default Detection