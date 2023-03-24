import React from "react";
import { CardProps } from "./Card.props";
import cls from "./Card.module.css";
import cn from "classnames";

export const Card = ({
  color = "white",
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(cls.card, className, { [cls.blue]: color == "blue" })}
      {...props}
    >
      {children}
    </div>
  );
};
