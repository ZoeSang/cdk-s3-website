import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkS3Website from '../lib/cdk-s3-website-stack';
import * as fs from 'fs';
import * as path from 'path';

beforeAll(() => {
    // Create the dist directory if it doesn't exist
    const distPath = path.join(__dirname, '../website/dist');
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath, { recursive: true });
        // Create a dummy index.html file
        fs.writeFileSync(path.join(distPath, 'index.html'), '<html><body>Test</body></html>');
    }
});

test('S3 Bucket Created With Website Configuration', () => {
    const app = new cdk.App();
    const stack = new CdkS3Website.CdkS3WebsiteStack(app, 'MyTestStack');
    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::S3::Bucket', {
        WebsiteConfiguration: {
            IndexDocument: 'index.html'
        }
    });
});