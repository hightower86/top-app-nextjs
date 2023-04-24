import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FC } from "react";
import cls from "./Layout.module.css";
import { AppContext, AppContextProvider } from "../context/app.context";
import { Up } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cls.wrapper}>
      <Header className={cls.header} />

      <Sidebar className={cls.sidebar} />
      <div className={cls.body}>{children}</div>

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
