import { FooterProps } from "./Footer.props";
import cls from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({
  className,
  ...otherProps
}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(cls.footer, className)} {...otherProps}>
      <div>OwTop 2022-{format(new Date(), "yyyy")} All rights reserved</div>
      <a href="#" target="_blank">
        User agreement
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
