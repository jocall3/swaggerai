import React from 'react';
// The swagger-ui-react library is expected to be available in the execution environment.
import SwaggerUI from 'swagger-ui-react';

const SwaggerDashboard: React.FC = () => {
  return (
    // The SwaggerUI component is self-contained and comes with its own styling,
    // which was linked in index.html.
    // We use the `url` prop to load the spec from a path. This is more robust
    // than using a direct import for JSON files in a browser-native ESM setup
    // as it avoids potential module resolution and type assertion issues.
    <div className="swagger-container">
      <SwaggerUI url="/api/openapi.json" />
    </div>
  );
};

export default SwaggerDashboard;
