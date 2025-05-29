import React from 'react';

interface InitialScanProgressProps {
  progress: number;
}

const InitialScanProgress: React.FC<InitialScanProgressProps> = ({ progress }) => {
  return (
    <div className="panel" style={{ maxWidth: '600px', margin: '100px auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Static Website to S3</h1>
      <p style={{ marginBottom: '20px' }}>Setting up your environment...</p>
      
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <p style={{ color: 'green' }}>✓ Step 1</p>
        <p style={{ color: 'green' }}>✓ Step 2</p>
        <p style={{ color: 'green' }}>✓ Step 3</p>
        <p>⟳ Step 4 ...</p>
      </div>
    </div>
  );
};

export default InitialScanProgress;
