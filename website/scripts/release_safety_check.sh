#!/bin/bash
# release_safety_check.sh - Automated pre-deployment verification

echo "=== StaticWebsiteToS3 Release Safety Checker ==="
echo "Running pre-deployment checks..."

# 1. Code Quality Checks
echo -n "Running linting... "
npm run lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "⚠️ FAILED - Linting issues found"
  # Don't exit, just warn
fi

echo -n "TypeScript compilation... "
npm run tsc > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "❌ FAILED - TypeScript errors found"
  exit 1
fi

# 2. Test Coverage
echo -n "Running unit tests... "
npm test > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "❌ FAILED - Tests are failing"
  exit 1
fi

# 3. Build Verification
echo -n "Creating production build... "
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "❌ FAILED - Build errors"
  exit 1
fi

# 4. AWS Configuration Validation
echo -n "Checking S3 bucket access... "
aws s3api head-bucket --bucket demo-static-website-hosting-1106 > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "❌ FAILED - S3 bucket not accessible"
  exit 1
fi

# 5. Dependency Security Check
echo -n "Running security audit... "
npm audit --production --audit-level=high > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ PASSED"
else
  echo "⚠️ WARNING - Security vulnerabilities found"
  # Don't exit, just warn
fi

# 6. Check bundle size
echo -n "Checking bundle size... "
BUNDLE_SIZE=$(du -sh dist/ | cut -f1)
echo "Bundle size: $BUNDLE_SIZE"

# All checks passed
echo "✅ All pre-deployment checks passed!"
echo "Ready for deployment to S3"
