import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import Logo from "../logo.svg";
import cn from "classnames";
import cls from "./Sidebar.module.css";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props} className={cn(className, cls.sidebar)}>
      <Logo className={cls.logo} />
      <div>search</div>
      <Menu />
    </div>
  );
};
