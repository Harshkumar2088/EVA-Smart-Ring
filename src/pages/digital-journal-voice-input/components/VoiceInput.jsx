import React, { useState, useEffect, useRef } from 'react';
import Icon from 'components/AppIcon';

const VoiceInput = ({ transcription, setTranscription, isRecording, setIsRecording, onTranscriptionComplete }) => {
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscription(finalTranscript + interimTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [setTranscription, setIsRecording]);

  const startRecording = () => {
    if (!isSupported || !recognitionRef.current) return;

    setIsRecording(true);
    setRecordingTime(0);
    setTranscription('');
    
    recognitionRef.current.start();
    
    // Start timer
    intervalRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
      setAudioLevel(Math.random() * 100); // Mock audio level
    }, 1000);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (transcription.trim()) {
      onTranscriptionComplete(transcription);
      setTranscription('');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isSupported) {
    return (
      <div className="bg-background rounded-organic shadow-soft-elevation-1 p-8 text-center">
        <Icon name="MicOff" size={48} color="#C53030" className="mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
          Voice Input Not Supported
        </h3>
        <p className="text-text-secondary">
          Your browser doesn't support voice input. Please use the text editor instead.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-organic shadow-soft-elevation-1 overflow-hidden">
      {/* Voice Input Header */}
      <div className="p-6 border-b border-border-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Mic" size={24} color="#4A90A4" />
            <div>
              <h3 className="font-heading font-semibold text-lg text-text-primary">
                Voice Input
              </h3>
              <p className="text-sm text-text-secondary">
                Speak naturally and your words will be transcribed
              </p>
            </div>
          </div>
          
          {isRecording && (
            <div className="flex items-center space-x-2 px-3 py-1 bg-error-light rounded-organic">
              <div className="w-2 h-2 bg-error rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-error-dark">
                {formatTime(recordingTime)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Recording Interface */}
      <div className="p-8">
        <div className="text-center mb-8">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-24 h-24 rounded-full flex items-center justify-center gentle-transition haptic-feedback ${
              isRecording
                ? 'bg-error text-text-inverse hover:bg-error-dark' :'bg-primary text-text-inverse hover:bg-primary-600'
            }`}
          >
            <Icon name={isRecording ? "Square" : "Mic"} size={32} />
          </button>
          
          <p className="mt-4 text-text-secondary">
            {isRecording ? 'Tap to stop recording' : 'Tap to start recording'}
          </p>
        </div>

        {/* Audio Visualization */}
        {isRecording && (
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-1 h-16">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full gentle-transition"
                  style={{
                    height: `${Math.random() * 60 + 10}px`,
                    opacity: Math.random() * 0.7 + 0.3
                  }}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Transcription Display */}
        <div className="min-h-[200px] p-4 bg-surface rounded-organic">
          {transcription ? (
            <p className="text-text-primary font-body text-lg leading-relaxed">
              {transcription}
            </p>
          ) : (
            <p className="text-text-tertiary font-body text-lg italic">
              {isRecording 
                ? 'Listening... Start speaking to see your words appear here.' :'Your transcribed speech will appear here when you start recording.'
              }
            </p>
          )}
        </div>

        {/* Voice Input Actions */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback">
              <Icon name="Settings" size={16} />
              <span className="text-sm">Settings</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-text-secondary hover:text-text-primary hover:bg-surface rounded-organic gentle-transition haptic-feedback">
              <Icon name="HelpCircle" size={16} />
              <span className="text-sm">Help</span>
            </button>
          </div>
          
          {transcription && (
            <button
              onClick={() => {
                onTranscriptionComplete(transcription);
                setTranscription('');
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-secondary text-text-inverse rounded-organic gentle-transition haptic-feedback hover:bg-secondary-600"
            >
              <Icon name="Plus" size={16} />
              <span className="font-body font-medium">Add to Journal</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceInput;