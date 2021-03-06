import { useState, useEffect } from 'react';

export const SM_WIDTH = 640;
export const MD_WIDTH = 768;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(null);

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useSizeChanges(ref) {
  const [dimensions, setDimensions] = useState(ref.current ? {width: ref.current.offsetWidth, height: ref.current.offsetHeight} : null);
  useEffect(() => {
    setDimensions(ref.current ? {width: ref.current.offsetWidth, height: ref.current.offsetHeight} : null);

    function handleResize() {
      setDimensions(ref.current ? {width: ref.current.offsetWidth, height: ref.current.offsetHeight} : null);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [ref]);

  return dimensions;


}