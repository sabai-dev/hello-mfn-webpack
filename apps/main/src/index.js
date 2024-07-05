import React, { useState, useEffect, lazy, Suspense  } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const [RemoteComponent, setRemoteComponent] = useState(null);

  useEffect(() => {
    const loadRemoteComponent = async () => {
      try {
        const { default: Component } = await import('componentApp/Component');
        setRemoteComponent(() => Component);
      } catch (error) {
        console.error('Failed to load remote component:', error);
        setRemoteComponent(() => null);
      }
    };

    loadRemoteComponent();
  }, []);

  return (
    <div>
      <h1>Main App (Container App)</h1>
      {RemoteComponent ? (
        <ErrorBoundary>
          <Suspense fallback="Loading Component from component app!">
            <RemoteComponent />
          </Suspense>
        </ErrorBoundary>
      ) : (
        <h1>Remote component is not available.</h1>
      )}
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);