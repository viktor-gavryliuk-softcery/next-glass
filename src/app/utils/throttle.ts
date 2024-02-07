// Throttle function implementation
export const throttle = (callback: Function, delay: number) => {
  let lastCall = 0;

  return function (...args: any[]) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
};
