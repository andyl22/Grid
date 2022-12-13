import React, { useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import { throttle, setThrottle } from '../../utilities/throttle';

export default function Header() {
  const lastScroll = useRef(0);
  const gridRef = useRef();

  // hide header on page scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (throttle) return;
      // negative check for Safari overscroll
      if (window.scrollY > lastScroll.current && window.scrollY > 0) {
        gridRef.current.classList.add(styles.hide);
        console.log('hide', window.scrollY, lastScroll.current);
      } else if (window.scrollY < lastScroll.current) {
        console.log('show', window.scrollY, lastScroll.current);
        gridRef.current.classList.remove(styles.hide);
      }
      lastScroll.current = window.scrollY;
      setThrottle();
    };

    setTimeout(() => document.addEventListener('scroll', handleScroll), 500);

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
