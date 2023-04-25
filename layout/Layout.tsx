import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FC, useRef, useState, KeyboardEvent } from "react";
import cls from "./Layout.module.css";
import { AppContext, AppContextProvider } from "../context/app.context";
import { Up } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
    useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={cls.wrapper}>
      <a
        onFocus={() => setIsSkipLinkDisplayed(true)}
        tabIndex={1}
        className={cn(cls.skipLink, {
          [cls.displayed]: isSkipLinkDisplayed,
        })}
        onKeyDown={skipContentAction}
      >
        Сразу к содержанию
      </a>
      <Header className={cls.header} />

      <Sidebar className={cls.sidebar} />
      <div
        tabIndex={0}
        className={cls.body}
        ref={bodyRef}
      >
        {children}
      </div>

      <Footer className={cls.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & AppContext>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider
        menu={props.menu}
        firstCategory={props.firstCategory}
      >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
