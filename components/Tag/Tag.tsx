import { PtagProps } from "./Tag.props";
import classNames from "classnames";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "l",
  color = "ghost",
  children,
  className,
  href,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.tag, styles[size], styles[color], className)}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
