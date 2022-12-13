let throttle;

const setThrottle = () => {
  throttle = true;
  setTimeout(() => {
    throttle = false;
  }, 200);
};

export { throttle, setThrottle };
