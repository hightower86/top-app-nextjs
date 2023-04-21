import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import cls from "./Menu.module.css";
import cn from "classnames";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

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
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={cls.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(cls.secondLevelBlock, {
                  [cls.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buidThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const buidThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(cls.thirdLevel, {
          [cls.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
        })}
      >
        {p.category}
      </Link>
    ));
  };

  return <div className={cn(className, cls.menu)}>{buidFirstLevel()}</div>;
};
