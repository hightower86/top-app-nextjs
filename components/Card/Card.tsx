import React, { ForwardedRef, forwardRef } from "react";
import { CardProps } from "./Card.props";
import cls from "./Card.module.css";
import cn from "classnames";

export const Card = forwardRef(
  (
    { color = "white", children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={cn(cls.card, className, { [cls.blue]: color == "blue" })}
        {...props}
      >
        {children}
      </div>
    );
  }
);
