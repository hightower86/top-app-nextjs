import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import cls from "./Menu.module.css";
import cn from "classnames";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <div className={cn(className, cls.menu)}>
      <ul>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem._id.secondCategory}>
              {menuItem._id.secondCategory}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
