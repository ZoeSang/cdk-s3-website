# CDK S3 Website Project

This project uses AWS CDK with TypeScript to deploy a static website hosted on Amazon S3. It also includes a React-based console application.

## Project Overview

The project consists of two main components:

### 1. CDK Infrastructure Code

- Uses AWS CDK to define infrastructure as code
- Creates an S3 bucket configured for static website hosting
- Sets up public read access for the website content
- Includes deployment resources to upload website content to the S3 bucket
- Outputs the website URL after deployment

### 2. React Console Application

- Located in the `/website` directory (previously `/console`)
- A React-based web application with TypeScript
- Has several components:
  - WelcomeScreen
  - InitialScanProgress
  - AssetOverview
- Includes tests for these components
- Has webpack configuration for building the application

## Key Files

- `lib/cdk-s3-website-stack.ts`: Defines the AWS resources (S3 bucket for website hosting)
- `bin/cdk-s3-website.ts`: Entry point for the CDK application
- `website/src/components/*.tsx`: React components for the console application
- `website/index.html`: A simple HTML file for the static website

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Bootstrap your AWS environment (if not already done):
   ```
   npx cdk bootstrap
   ```

3. Deploy the stack:
   ```
   npx cdk deploy
   ```

4. To work on the console application:
   ```
   cd website
   npm install
   npm start
   ```

## Important Notes

- The S3 bucket is configured with public read access, which is necessary for hosting a public website.
- The bucket's `blockPublicAccess` property is explicitly configured to allow public access.
- The bucket has `removalPolicy: DESTROY` and `autoDeleteObjects: true`, which means the bucket and its contents will be deleted when the stack is destroyed.

## Useful Commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Security Considerations

- The S3 bucket is configured with public read access, which is appropriate for a public website but should be carefully considered for sensitive content.
- Consider adding CloudFront distribution for better security and performance in production environments.
- Review IAM permissions and access controls regularly.

## Troubleshooting

If you encounter the error:
```
ValidationError: Cannot use 'publicReadAccess' property on a bucket without allowing bucket-level public access through 'blockPublicAccess' property.
```

Ensure that the S3 bucket configuration includes:
```typescript
blockPublicAccess: new s3.BlockPublicAccess({
  blockPublicAcls: false,
  blockPublicPolicy: false,
  ignorePublicAcls: false,
  restrictPublicBuckets: false
})
```
