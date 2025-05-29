import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AssetOverview from '../components/AssetOverview';

describe('AssetOverview', () => {
  beforeEach(() => {
    // Mock window.alert
    window.alert = jest.fn();
  });

  test('renders project selector and repositories table', () => {
    render(<AssetOverview />);
    
    // Check for project selector
    expect(screen.getByText('Project:')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Marketing Website')).toBeInTheDocument();
    
    // Check for table headers
    expect(screen.getByText('Repository')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Last PR')).toBeInTheDocument();
    
    // Check for repository entries
    expect(screen.getByText(/^• landing-page$/)).toBeInTheDocument();
    expect(screen.getByText(/^• blog-content$/)).toBeInTheDocument();
    expect(screen.getByText(/^• product-docs$/)).toBeInTheDocument();
    expect(screen.getByText(/^• assets$/)).toBeInTheDocument();
    expect(screen.getByText(/^• dev-support-team$/)).toBeInTheDocument();
  });

  test('displays correct status indicators', () => {
    render(<AssetOverview />);
    
    expect(screen.getAllByText('● Succeeded')[0]).toBeInTheDocument();
    expect(screen.getByText('⚠ Warning')).toBeInTheDocument();
    expect(screen.getByText('↻ In Progress')).toBeInTheDocument();
    expect(screen.getAllByText('✕ Failed')[0]).toBeInTheDocument();
  });

  test('displays repository information', () => {
    render(<AssetOverview />);
    
    // Check for repository names
    expect(screen.getByText(/^• landing-page$/)).toBeInTheDocument();
    expect(screen.getByText(/^• blog-content$/)).toBeInTheDocument();
    expect(screen.getByText(/^• product-docs$/)).toBeInTheDocument();
    expect(screen.getByText(/^• assets$/)).toBeInTheDocument();
    expect(screen.getByText(/^• dev-support-team$/)).toBeInTheDocument();
    
    // Check for PR information
    expect(screen.getByText('PR#142: "Update hero section"')).toBeInTheDocument();
    expect(screen.getByText('PR#098: "Add Q2 product updates"')).toBeInTheDocument();
    expect(screen.getByText('PR#076: "Fix navigation links"')).toBeInTheDocument();
    expect(screen.getByText('PR#215: "Compress image assets"')).toBeInTheDocument();
    expect(screen.getByText('PR#054: "Team member updates"')).toBeInTheDocument();
  });

  test('calls alert when action buttons are clicked', () => {
    render(<AssetOverview />);
    
    const addRepoButton = screen.getByText('Add New Repository');
    fireEvent.click(addRepoButton);
    expect(window.alert).toHaveBeenCalledWith('Add repository functionality would be implemented here');
    
    const configNotificationsButton = screen.getByText('Configure Notifications');
    fireEvent.click(configNotificationsButton);
    expect(window.alert).toHaveBeenCalledWith('Configure notifications functionality would be implemented here');
    
    const viewHistoryButton = screen.getByText('View Deployment History');
    fireEvent.click(viewHistoryButton);
    expect(window.alert).toHaveBeenCalledWith('View deployment history functionality would be implemented here');
  });
});
