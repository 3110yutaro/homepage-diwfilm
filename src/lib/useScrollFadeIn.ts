import { useEffect, useRef, useCallback } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

export const useScrollFadeIn = (
  direction: Direction = 'up',
  duration: number = 1,
  delay: number = 0
) => {
  const element = useRef<HTMLDivElement>(null);

  const handleDirection = (name: Direction) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 20%, 0)';
      case 'down':
        return 'translate3d(0, -20%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      const { current } = element;
      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(onScroll, {
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
      });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};
