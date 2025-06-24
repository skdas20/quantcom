import { useState, useEffect } from 'react';

const useAppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Keep loading screen for a brief moment after 100%
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15; // Random progress increments
      });
    }, 200);

    // Minimum loading time
    const minLoadingTime = setTimeout(() => {
      if (progress < 100) {
        setProgress(100);
      }
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadingTime);
    };
  }, [progress]);

  return { isLoading, progress };
};

export default useAppLoading;
