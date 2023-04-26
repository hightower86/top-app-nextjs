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
      <div
        className={cls.sortName}
        id="sort"
      >
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(cls.sortBtn, {
          [cls.active]: sort == SortEnum.Rating,
        })}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={cls.sortIcon} />
        По рейтингу
      </button>
      <button
        id="price"
        onClick={() => setSort(SortEnum.Price)}
        className={cn(cls.sortBtn, {
          [cls.active]: sort == SortEnum.Price,
        })}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={cls.sortIcon} />
        По цене
      </button>
    </div>
  );
};
