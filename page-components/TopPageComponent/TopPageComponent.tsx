import { TopPageComponentProps } from "./TopPageComponent.props";
import classNames from "classnames";
import cls from "./TopPageComponent.module.css";

export const TopPageComponent = ({
  firstLevelCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
