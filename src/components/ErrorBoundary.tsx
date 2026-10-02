
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <main className="state-page site-container">
          <div className="state-content" role="alert">
            <span className="eyebrow">A brief interruption</span>
            <h1>This page couldn't load.</h1>
            <p>Something went wrong while opening the portfolio. Reload to try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="button button-primary"
            >
              Reload Page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
