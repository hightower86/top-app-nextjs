import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import cls from "./Menu.module.css";
import cn from "classnames";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import ServicesIcon from "./icons/services.svg";
import ProductsIcon from "./icons/products.svg";
import BooksIcon from "./icons/books.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Link from "next/link";

interface MenuProps {
  className?: string;
}

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = ({ className }: MenuProps) => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buidFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link
              href={`/${m.route}`}
              className={cn(cls.firstLevel, {
                [cls.firstLevelActive]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={cls.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={cls.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(cls.secondLevelBlock, {
                [cls.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buidThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };
  const buidThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        href={`/${route}/${p.alias}`}
        className={cn(cls.thirdLevel, { [cls.thirdLevelActive]: false })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={cn(className, cls.menu)}>{buidFirstLevel()}</div>;
};
