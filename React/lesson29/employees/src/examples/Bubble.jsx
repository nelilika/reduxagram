import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

const fast = {
  tension: 1200,
  friction: 40,
};
const slow = {
  mass: 10,
  tension: 200,
  friction: 50,
};

const translate = (x, y) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export default function Bubble() {
  const [{ pos1 }, setPos1] = useSpring(() => ({ pos1: [0, 0], config: fast }));
  const { pos2 } = useSpring({ pos2: pos1, config: slow });
  const { pos3 } = useSpring({ pos3: pos2, config: slow });

  useEffect(() => {
    const handler = ({ clientX, clientY }) =>
      setPos1.start({ pos1: [clientX, clientY] });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [setPos1]);

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <animated.div
            className="b1"
            style={{ transform: pos3.to(translate) }}
          />
          <animated.div
            className="b2"
            style={{ transform: pos2.to(translate) }}
          />
          <animated.div
            className="b3"
            style={{ transform: pos1.to(translate) }}
          />
        </div>
      </div>
    </>
  );
}
