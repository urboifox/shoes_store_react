const routesAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.5,
    },
  },
};

export default routesAnimation;
