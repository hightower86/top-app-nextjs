import { motion, useAnimation } from "framer-motion";
import { useScrollY } from "../../hooks/useScroll";
import cls from "./Up.module.css";
import UpIcon from "./up.svg";
import { useEffect } from "react";

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({
      opacity: y / document.body.scrollHeight,
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      className={cls.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};
