// Monkey patch for deploymentId issue in Next.js
// This is a workaround for the "Cannot read properties of undefined (reading 'deploymentId')" error

// Add this to a custom server.js file
const originalConsoleError = console.error;
console.error = function() {
  // Filter out the deploymentId error
  if (
    arguments[0] && 
    typeof arguments[0] === 'string' && 
    arguments[0].includes('deploymentId')
  ) {
    return;
  }
  return originalConsoleError.apply(console, arguments);
};

// Set a fake deploymentId to prevent the error
if (!process.env.__NEXT_DEPLOYMENT_ID) {
  process.env.__NEXT_DEPLOYMENT_ID = 'local-dev-' + Date.now().toString();
}

console.log('✅ Applied Next.js patches for local development');