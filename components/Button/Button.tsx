import { ButtonProps } from "./Button.props";
import ArrowIcon from "./ArrowIcon.svg";
import cn from "classnames";
import styles from "./Button.module.css";
import { motion } from "framer-motion";

export const Button = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(styles.button, styles[appearance], className)}
      {...props}
    >
      {children}
      <ArrowIcon className={cn(styles[arrow], styles.arrow, className)} />
    </motion.button>
  );
};
