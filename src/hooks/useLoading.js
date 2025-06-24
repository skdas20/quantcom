import { useState, useEffect } from 'react';

const useLoading = (duration = 3000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
          }, 500); // Small delay after reaching 100%
          return 100;
        }
        return prev + (100 / (duration / 50)); // Update every 50ms
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration]);

  return { isLoading, progress };
};

export default useLoading;
