'use client';

import { useState } from 'react';

interface WelcomeProps {
  title: string; // Prop type definition
}

export default function Welcome({ title }: WelcomeProps) {
  const [showMessage, setShowMessage] = useState(true); // State for toggle

  const toggleMessage = () => {
    setShowMessage(!showMessage); // Event handler
  };

  return (
    <div>
      <h2>{title}</h2>
      {showMessage ? (
        <p>This is a simple React app demonstrating components, state, events, and more.</p>
      ) : (
        <p>Message hidden! Click to show.</p>
      )}
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
    </div>
  );
}