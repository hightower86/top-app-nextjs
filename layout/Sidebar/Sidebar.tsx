import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
// import Logo from "../logo.svg";
import Logo from "../fox-logo.svg";
import cn from "classnames";
import cls from "./Sidebar.module.css";
import { Search } from "../../components";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(className, cls.sidebar)}
    >
      <div className={cls.logoWrapper}>
        <Logo className={cls.logo} />
        <span className={cls.foxtop}>FOXtop</span>
      </div>
      <Search />
      <Menu />
    </div>
  );
};
