import { PtagProps } from "./Ptag.props";
import classNames from "classnames";
import styles from "./Ptag.module.css";

export const Ptag = ({
  size = "l",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={classNames(styles.p, styles[size], className)}
      {...props}
    >
      {children}
    </p>
  );
};
