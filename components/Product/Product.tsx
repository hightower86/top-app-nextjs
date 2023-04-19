import { ProductProps } from "./Product.props";
import classNames from "classnames";
import cls from "./Product.module.css";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <div
      className={classNames(cls.product, className)}
      {...props}
    >
      {product.title}
    </div>
  );
};
