import React, { useState } from 'react';

interface Repository {
  name: string;
  status: 'Succeeded' | 'Warning' | 'In Progress' | 'Failed';
  lastPR: string;
  s3Path: string;
}

const AssetOverview: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string>('Marketing Website');
  const [repositories, setRepositories] = useState<Repository[]>([
    {
      name: 'landing-page',
      status: 'Succeeded',
      lastPR: 'PR#142: "Update hero section"',
      s3Path: 's3://marketing-website-prod/landing'
    },
    {
      name: 'blog-content',
      status: 'Succeeded',
      lastPR: 'PR#098: "Add Q2 product updates"',
      s3Path: 's3://marketing-website-prod/blog'
    },
    {
      name: 'product-docs',
      status: 'Warning',
      lastPR: 'PR#076: "Fix navigation links"',
      s3Path: 's3://marketing-website-stage/docs'
    },
    {
      name: 'assets',
      status: 'In Progress',
      lastPR: 'PR#215: "Compress image assets"',
      s3Path: 's3://marketing-website-prod/assets'
    },
    {
      name: 'dev-support-team',
      status: 'Failed',
      lastPR: 'PR#054: "Team member updates"',
      s3Path: 's3://marketing-website-dev/about'
    },
    {
      name: 'another-new-repo',
      status: 'Failed',
      lastPR: 'PR#032: "Test repo for PR"',
      s3Path: 's3://marketing-website-test/about'
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Succeeded':
        return <span className="status-succeeded">● Succeeded</span>;
      case 'Warning':
        return <span className="status-warning">⚠ Warning</span>;
      case 'In Progress':
        return <span className="status-in-progress">↻ In Progress</span>;
      case 'Failed':
        return <span className="status-failed">✕ Failed</span>;
      default:
        return status;
    }
  };

  const handleAddRepository = () => {
    alert('Add repository functionality would be implemented here');
  };

  const handleConfigureNotifications = () => {
    alert('Configure notifications functionality would be implemented here');
  };

  const handleViewDeploymentHistory = () => {
    alert('View deployment history functionality would be implemented here');
  };

  return (
    <div className="panel">
      <h1 style={{ marginBottom: '20px' }}>Static Website to S3</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Project: 
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="Marketing Website">Marketing Website</option>
            <option value="Corporate Site">Corporate Site</option>
            <option value="Documentation Portal">Documentation Portal</option>
          </select>
        </label>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button className="button">Repositories</button>
        <button className="button" onClick={handleAddRepository}>Add New Repository</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Status</th>
            <th>Last PR</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo) => (
            <tr key={repo.name} className="repository-row">
              <td>• {repo.name}</td>
              <td>{getStatusIcon(repo.status)}</td>
              <td>{repo.lastPR}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button className="button" onClick={handleConfigureNotifications}>
          Configure Notifications
        </button>
        <button className="button" onClick={handleViewDeploymentHistory}>
          View Deployment History
        </button>
      </div>
    </div>
  );
};

export default AssetOverview;
