import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import victory from "../../assets/emojis/victory.png";
import thumbs_up from "../../assets/emojis/thumbs_up.png";

const Detection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [detectionStatus, setDetectionStatus] = useState("Not Detected");
  const [accuracy, setAccuracy] = useState("N/A");
  const [emoji, setEmoji] = useState(null);

  const image = { thumbs_up: thumbs_up, victory: victory };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // Ensure the canvas matches the webcam size
      const canvas = canvasRef.current;
      canvas.width = videoWidth;
      canvas.height = videoHeight;

      // Make detection
      const hands = await net.estimateHands(video);

      if (hands.length > 0) {
        setDetectionStatus("Detected");
        const gestureEstimator = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ]);
        const gesture = await gestureEstimator.estimate(hands[0].landmarks, 7.5);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          // Choose gesture with the highest confidence
          const maxConfidenceGesture = gesture.gestures.reduce((prev, current) =>
            prev.confidence > current.confidence ? prev : current
          );

          setEmoji(maxConfidenceGesture.name);
          setAccuracy(`${(maxConfidenceGesture.confidence * 100).toFixed(2)}%`);
        }
      } else {
        setDetectionStatus("Not Detected");
        setAccuracy("N/A");
        setEmoji(null);
      }

      // Draw detected hand mesh
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHand(hands, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-[35rem] bg-gray-100 relative">
      <header className="relative flex justify-center items-center w-full h-[30rem]">
        <Webcam
          ref={webcamRef}
          className="absolute w-full h-full max-w-[30rem] object-cover z-10 rounded-lg shadow-lg"
        />
        <canvas
          ref={canvasRef}
          className="absolute w-full max-w-[30rem] h-full z-20"
        />
        {/* Display Emoji */}
        {emoji && (
          <img
            src={image[emoji]}
            alt="gesture emoji"
            className="absolute top-4 right-4 w-16 h-16 z-30"
          />
        )}
      </header>

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-2 mb-4 z-30">
        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 mt-2">
          Start Detection
        </button>

        <p className="text-center text-gray-800">
          Results: <span className="text-green-500">{detectionStatus}</span> | Accuracy:{" "}
          <span className="text-blue-500">{accuracy}</span>
        </p>
      </div>
    </div>
  );
};

export default Detection;
