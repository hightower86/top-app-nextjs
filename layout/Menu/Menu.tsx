import { useContext, KeyboardEvent, useState } from "react";
import { AppContext } from "../../context/app.context";
import cls from "./Menu.module.css";
import cn from "classnames";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface MenuProps {
  className?: string;
}

export const Menu = ({ className }: MenuProps) => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();
  const shouldReduceMotion = useReducedMotion();

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buidFirstLevel = () => {
    return (
      <ul className={cls.firstLevelList}>
        {firstLevelMenu.map((m) => (
          <li
            key={m.route}
            aria-expanded={m.id == firstCategory}
          >
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
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={cls.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={cls.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <AnimatePresence initial={false}>
                {m.isOpened && (
                  <motion.ul
                    className={cn(cls.secondLevelBlock)}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={
                      shouldReduceMotion
                        ? {}
                        : {
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          }
                    }
                  >
                    {buidThirdLevel(
                      m.pages,
                      menuItem.route,
                      m.isOpened ?? false
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    );
  };
  const buidThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.li
        key={p._id}
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.8 }}
      >
        <Link
          tabIndex={isOpened ? 0 : -1}
          href={`/${route}/${p.alias}`}
          className={cn(cls.thirdLevel, {
            [cls.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
          aria-current={
            `/${route}/${p.alias}` == router.asPath ? "page" : false
          }
        >
          {p.category}
        </Link>
      </motion.li>
    ));
  };

  return (
    <nav
      className={cn(className, cls.menu)}
      role="navigation"
    >
      {announce && (
        <span
          role="log"
          className="visualyHidden"
        >
          {announce == "opened" ? "развернуто" : "свернуто"}
        </span>
      )}

      {buidFirstLevel()}
    </nav>
  );
};
