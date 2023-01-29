import { ButtonProps } from "./Button.props";
import ArrowIcon from "./ArrowIcon.svg";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  children,
  appearance,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, styles[appearance], className)}
      {...props}
    >
      {children}
      <ArrowIcon className={cn(styles[arrow], styles.arrow, className)} />
    </button>
  );
};
