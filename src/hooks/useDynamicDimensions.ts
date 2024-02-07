import { throttle } from '@/app/utils/throttle';
import { useCallback, useEffect, useRef, useState } from 'react';

const useDynamicDimensions = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  let updateDimensions = useCallback(() => {
    if (boxRef.current) {
      // Use Math.max to get the maximum value between window.innerWidth and boxRef.current.clientWidth
      if (
        Math.min(window.innerWidth, boxRef.current.clientWidth) > 1280 &&
        window.innerWidth > dimensions.width
      )
        return;

      setDimensions({
        width: boxRef.current.clientWidth,
        height: boxRef.current.clientHeight,
      });
    }
  }, []);

  updateDimensions = useCallback(throttle(updateDimensions, 100), [updateDimensions]);

  useEffect(() => {
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateDimensions]);

  return { dimensions, boxRef };
};

export default useDynamicDimensions;
