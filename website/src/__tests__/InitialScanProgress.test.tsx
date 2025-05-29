import React from 'react';
import { render, screen } from '@testing-library/react';
import InitialScanProgress from '../components/InitialScanProgress';

describe('InitialScanProgress', () => {
  test('renders progress information', () => {
    render(<InitialScanProgress progress={75} />);
    
    expect(screen.getByText('Setting up your environment...')).toBeInTheDocument();
    expect(screen.getByText('✓ Step 1')).toBeInTheDocument();
    expect(screen.getByText('✓ Step 2')).toBeInTheDocument();
    expect(screen.getByText('✓ Step 3')).toBeInTheDocument();
    expect(screen.getByText('⟳ Step 4 ...')).toBeInTheDocument();
  });

  test('displays progress bar with correct width', () => {
    render(<InitialScanProgress progress={75} />);
    
    const progressBarFill = document.querySelector('.progress-bar-fill');
    expect(progressBarFill).toHaveStyle('width: 75%');
  });

  test('displays progress bar with different progress value', () => {
    render(<InitialScanProgress progress={50} />);
    
    const progressBarFill = document.querySelector('.progress-bar-fill');
    expect(progressBarFill).toHaveStyle('width: 50%');
  });
});
