import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionAnimation = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  ...props
}) => {
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 800;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // If the viewport is less than 480px, kill the animations
      if (window.matchMedia("(max-width: 480px)").matches) {
        gsap.killTweensOf(compRef.current);
      } else {
        // Only animate if the tween doesn't already exist
        if (!ScrollTrigger.getById(compRef.current)) {
          gsap.from(compRef.current, {
            ...fadeDirection,
            duration: 5,
            scrollTrigger: {
              id: compRef.current,
              trigger: compRef.current,
              start: "top bottom",
              end: "bottom top",
            },
            opacity: 0,
            delay,
          });
        }
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call the resize function to check initial viewport
    handleResize();

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(compRef.current);
    };
  }, [compRef, fadeDirection, delay]);

  return (
    <Component
      ref={compRef}
      {...props}
      style={{ overflowX: "hidden", ...props.style }}
    >
      {children}
    </Component>
  );
};

export default MotionAnimation;
