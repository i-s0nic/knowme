const LoadingSpinner = () => (
  <div className="loading-state" role="status" aria-live="polite">
    <span className="loading-ring" aria-hidden="true" />
    <span>Opening the collection...</span>
  </div>
);

export default LoadingSpinner;
