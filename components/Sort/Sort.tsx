import { SortEnum, SortProps } from "./Sort.props";
import cn from "classnames";
import cls from "./Sort.module.css";
import SortIcon from "./sort.svg";

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div
      className={cn(cls.sort, className)}
      {...props}
    >
      <button
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(cls.sortBtn, {
          [cls.active]: sort == SortEnum.Rating,
        })}
      >
        <SortIcon className={cls.sortIcon} />
        По рейтингу
      </button>
      <button
        onClick={() => setSort(SortEnum.Price)}
        className={cn(cls.sortBtn, {
          [cls.active]: sort == SortEnum.Price,
        })}
      >
        <SortIcon className={cls.sortIcon} />
        По цене
      </button>
    </div>
  );
};
