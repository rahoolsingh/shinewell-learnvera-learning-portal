import { useState, useEffect } from 'react';

export function useScroll() {
  const [lastYPos, setLastYPos] = useState(0);
  const [direction, setDirection] = useState('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPos = window.scrollY;
      setScrollY(currentYPos);
      setDirection(currentYPos > lastYPos ? 'down' : 'up');
      setLastYPos(currentYPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastYPos]);

  return { scrollY, direction };
}