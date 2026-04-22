const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[40vh] bg-background">
      <div className="w-12 h-12 border-2 border-border border-t-primary rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
