export default (React, ReactDOM) => {
  if (process.env.NODE_ENV !== 'production') {
    (async () => {
      const axe = (await import('react-axe')).default;
      axe(React, ReactDOM, 1000);
    })();
  }
};
