import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MotionAnimation = ({
  children,
  wrapperElement = 'div',
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  const compRef = useRef(null);
  const distance = 800;
  let fadeDirection;

  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: -distance };
      break;
    case 'down':
      fadeDirection = { y: distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    const currentRef = compRef.current; // Copies the current ref value to a variable

    const handleResize = () => {
      if (window.matchMedia('(max-width: 416px)').matches) {
        gsap.killTweensOf(currentRef);
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === currentRef) {
            trigger.kill();
          }
        });
      } else {
        gsap.from(currentRef, {
          ...fadeDirection,
          duration: 5,
          scrollTrigger: {
            trigger: currentRef,
            start: 'top bottom',
            end: 'bottom top',
          },
          opacity: 0,
          delay,
        });
      }
    };

    handleResize(); // on mount to handle initial size
    window.addEventListener('resize', handleResize);

    // removes the resize listener and kill animations
    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf(currentRef);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === currentRef) {
          trigger.kill();
        }
      });
    };
  }, [compRef, fadeDirection, delay]); // compRef is in the dependency array

  // Prevent horizontal scrolling during animation
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <Component ref={compRef} {...props} style={{ overflowX: 'hidden', ...props.style }}>
      {children}
    </Component>
  );
};

export default MotionAnimation;
