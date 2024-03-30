"use client";

import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Transcrive = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true after component mounts on the client
  }, []);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!isClient || !browserSupportsSpeechRecognition) {
    return null; // Return null if SSR or if browser doesn't support speech recognition
  }

  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <p>
        A React hook that converts speech from the microphone to text and makes
        it available to your React components.
      </p>
      <div className="main-content">{transcript}</div>
      <div className="btn-style">
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default Transcrive;
