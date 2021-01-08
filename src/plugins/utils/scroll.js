import animateScroll from "scrollto-with-animation";

export const scroll = (pos, duration = 600, delay = 0) =>
  new Promise(resolve => {
    setTimeout(() => {
      animateScroll(
        document.documentElement,
        "scrollTop",
        pos,
        duration,
        "easeInOutSine",
        resolve
      );
    }, delay);
  });
