export default {
  scrollBehavior(to) {
    return new Promise((resolve) => {
      if (to.hash) {
        const header = document.querySelector('header');
        const offset = header.offsetHeight;

        setTimeout(() => {
          resolve({
            el: to.hash,
            top: offset,
            behavior: 'smooth',
          });
        }, 250);
      } else {
        resolve({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  },
};
