import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomeScreen from '../components/WelcomeScreen';

describe('WelcomeScreen', () => {
  test('renders welcome message', () => {
    const mockOnContinue = jest.fn();
    render(<WelcomeScreen onContinue={mockOnContinue} />);
    
    expect(screen.getByText('Static Website to S3')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Static Website to S3')).toBeInTheDocument();
  });

  test('calls onContinue when button is clicked', () => {
    const mockOnContinue = jest.fn();
    render(<WelcomeScreen onContinue={mockOnContinue} />);
    
    const continueButton = screen.getByText('Continue →');
    fireEvent.click(continueButton);
    
    expect(mockOnContinue).toHaveBeenCalledTimes(1);
  });
});
