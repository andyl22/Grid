import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const lastScroll = useRef(0);
  const gridRef = useRef();

  // hide header on page scroll down, show on scroll up
  useEffect(() => {
    let throttle;
    const handleScroll = () => {
      if (window.scrollY === 0) throttle = false;
      if (throttle) return;
      // negative check for Safari overscroll
      if (window.scrollY > lastScroll.current && window.scrollY > 0) {
        gridRef.current.classList.add(styles.hide);
      } else if (window.scrollY < lastScroll.current) {
        gridRef.current.classList.remove(styles.hide);
      }
      lastScroll.current = window.scrollY;
      throttle = true;
      setTimeout(() => (throttle = false), 300);
    };

    setTimeout(() => document.addEventListener('scroll', handleScroll), 2000);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} ref={gridRef}>
      <h1>Grid</h1>
    </header>
  );
}
