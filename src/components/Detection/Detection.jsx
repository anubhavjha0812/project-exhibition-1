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
      <button className="toggle-button bg-green-500 pointer mt-4 " >
        <p className="p-2">Start Detection</p>
      </button>
    <header className="App-header">
      <Webcam  className="p-5 "/>
    </header>
   </div>
  )
}

export default Detection