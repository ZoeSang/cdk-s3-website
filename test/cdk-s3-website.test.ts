import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkS3Website from '../lib/cdk-s3-website-stack';

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
