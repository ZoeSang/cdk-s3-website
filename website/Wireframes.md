# Static website to S3

This document contains wireframes for the wireframe of testing static website.

## 1. Onboarding Experience

### 1.1 Installation & Feature Selection
```
+----------------------------------------------------------------------+
|                    Static Website to S3                              |
+----------------------------------------------------------------------+
|                                                                      |
|  Welcome to Static Website to S3                                     |
|                                                                      |
|                                                                      |
|                           [Continue →]                               |
+----------------------------------------------------------------------+
```

### 1.2 Initial Scan Progress
```
+----------------------------------------------------------------------+
|                    Static Website to S3                              |
+----------------------------------------------------------------------+
|                                                                      |
|  Setting up your environment...                                      |
|                                                                      |
|  [====================] 75%                                          |
|                                                                      |
|  ✓ Step 1                                                            |
|  ✓ Step 2                                                            |
|  ✓ Step 3                                                            |
|  ⟳ Step 4 ...                                                        |
|                                                                      |
|                                                                      |
+----------------------------------------------------------------------+
```

### 1.3 Asset Overview
```
+----------------------------------------------------------------------+
|                    Static Website to S3                              |
+----------------------------------------------------------------------+
|                                                                      |
|  Project: [Marketing Website ▼]                                      |
|                                                                      |
|  [Repositories]                [Add New Repository]                  |
|                                                                      |
|  +------------------------------------------------------------------+|
|  | Repository       | Status        | Last PR                       ||
|  +------------------------------------------------------------------+|
|  | landing-page     | ● Succeeded   | PR#142: "Update hero section" ||
|  |   s3://marketing-website-prod/landing                            ||
|  | blog-content     | ● Succeeded   | PR#098: "Add Q2 product updates" ||
|  |   s3://marketing-website-prod/blog                               ||
|  | product-docs     | ⚠ Warning     | PR#076: "Fix navigation links" ||
|  |   s3://marketing-website-stage/docs                              ||
|  | assets           | ↻ In Progress | PR#215: "Compress image assets" ||
|  |   s3://marketing-website-prod/assets                             ||
|  | about-us         | ✕ Failed      | PR#054: "Team member updates" ||
|  |   s3://marketing-website-dev/about                               ||
|  +------------------------------------------------------------------+|
|                                                                      |
|  [Configure Notifications]     [View Deployment History]             |
+----------------------------------------------------------------------+
```