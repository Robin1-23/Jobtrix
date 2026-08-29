import React from 'react';
import ReactDOM from 'react-dom/client';
import JobtrixLanding from './JobtrixLanding.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: "sans-serif", background: "#0F172A", color: "#F8FAFC", minHeight: "100vh" }}>
          <h2 style={{ color: "#F87171" }}>Application Render Error</h2>
          <p>Please check the console or the error below:</p>
          <pre style={{ background: "#020617", padding: 18, borderRadius: 8, color: "#FCA5A5", overflowX: "auto" }}>
            {this.state.error?.toString()}
            {"\n"}
            {this.state.error?.stack}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: "10px 20px", background: "#0284C7", color: "#FFF", border: "none", borderRadius: 8, cursor: "pointer" }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <JobtrixLanding />
    </ErrorBoundary>
  </React.StrictMode>
);
