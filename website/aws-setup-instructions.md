# AWS Setup for S3 Deployment

## 1. Create an IAM User for GitHub Actions

1. Log in to the AWS Management Console
2. Navigate to IAM (Identity and Access Management)
3. Click on "Users" in the left sidebar, then "Add user"
4. Set a username (e.g., `github-actions-s3-deployer`)
5. Select "Access key - Programmatic access" as the access type
6. Click "Next: Permissions"

## 2. Set Permissions

### Option A: Create a new policy
1. Click "Create policy"
2. Select the JSON tab and paste the following policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::static-website-to-s3-console",
                "arn:aws:s3:::static-website-to-s3-console/*"
            ]
        }
    ]
}
```

3. Name the policy (e.g., `S3DeploymentPolicy`) and create it
4. Attach this policy to your new user

### Option B: Use existing policy
1. Attach the `AmazonS3FullAccess` policy (not recommended for production)
2. Or create a more restrictive custom policy as shown above

## 3. Complete User Creation
1. Click through to review and create the user
2. **IMPORTANT**: Download or copy the Access Key ID and Secret Access Key
3. These credentials will only be shown once!

## 4. Create S3 Bucket
1. Navigate to S3 in the AWS Management Console
2. Click "Create bucket"
3. Name your bucket `static-website-to-s3-console` (or your preferred name)
4. Choose the appropriate region
5. Configure bucket settings:
   - Unblock all public access (if this is a public website)
   - Enable static website hosting (Properties → Static website hosting)
   - Set index document to `index.html`
   - Set error document to `index.html` (for SPA routing)

## 5. Bucket Policy for Public Access
If you want the website to be publicly accessible, add this bucket policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::static-website-to-s3-console/*"
        }
    ]
}
```

## 6. Add GitHub Repository Secrets
1. Go to your GitHub repository
2. Navigate to Settings → Secrets → New repository secret
3. Add the following secrets:
   - Name: `AWS_ACCESS_KEY_ID`, Value: [Your Access Key ID]
   - Name: `AWS_SECRET_ACCESS_KEY`, Value: [Your Secret Access Key]

## 7. Update GitHub Actions Workflow
1. Make sure the S3 bucket name in the workflow file matches your created bucket
2. Ensure the AWS region is correct

## 8. Commit and Push
1. Commit the GitHub Actions workflow file
2. Push to your main branch to trigger the deployment

## Website URL
After deployment, your website will be available at:
`http://static-website-to-s3-console.s3-website-[region].amazonaws.com/`

Replace `[region]` with your AWS region (e.g., `us-east-1`).
