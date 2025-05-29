import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('initially renders welcome screen', () => {
    render(<App />);
    expect(screen.getByText('Welcome to Static Website to S3')).toBeInTheDocument();
  });

  test('transitions from welcome to scanning screen when continue is clicked', () => {
    render(<App />);
    
    const continueButton = screen.getByText('Continue →');
    fireEvent.click(continueButton);
    
    expect(screen.getByText('Setting up your environment...')).toBeInTheDocument();
  });

  test('transitions from scanning to overview screen after timeout', () => {
    render(<App />);
    
    // Click continue to go to scanning screen
    const continueButton = screen.getByText('Continue →');
    fireEvent.click(continueButton);
    
    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    // Should now be on the overview screen
    expect(screen.getByText('Project:')).toBeInTheDocument();
    expect(screen.getByText(/landing-page/)).toBeInTheDocument();
  });
});
