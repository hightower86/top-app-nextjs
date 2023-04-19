import { DividerProps } from "./Divider.props";
import cls from "./Divider.module.css";
import cn from "classnames";

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return (
    <hr
      className={cn(className, cls.hr)}
      {...props}
    />
  );
};
