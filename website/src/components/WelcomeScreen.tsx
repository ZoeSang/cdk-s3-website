import React from 'react';

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  return (
    <div className="panel" style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Static Website to S3</h1>
      <p style={{ marginBottom: '40px' }}>
        Welcome to Static Website to S3
      </p>
      <button className="button" onClick={onContinue}>
        Continue →
      </button>
    </div>
  );
};

export default WelcomeScreen;
