import cls from "./ButtonIcon.module.css";
import { ButtonIconProps, icons } from "./ButtonIcon.props";
import cn from "classnames";
import React from "react";

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(cls.button, className, {
        [cls.primary]: appearance == "primary",
        [cls.white]: appearance == "white",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
