import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className='slide-in z-50'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1],delay:0.5 }}
      />
      <motion.div
        className='slide-out z-50'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1],delay:0.5  }}
      />
    </>
  );
};

export default transition;

