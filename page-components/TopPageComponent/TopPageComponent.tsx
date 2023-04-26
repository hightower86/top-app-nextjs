import { TopPageComponentProps } from "./TopPageComponent.props";
import cls from "./TopPageComponent.module.css";
import { Advantages, HhData, Htag, Product, Sort, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { useEffect, useReducer } from "react";
import { SortEnum } from "../../components/Sort/Sort.props";
import { sortReducer } from "../../components/Sort/sort.reducer";
import { useReducedMotion } from "framer-motion";

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        <Htag tag="h1">{page?.title}</Htag>
        {products && (
          <Tag
            color="gray"
            size="m"
            aria-label={products.length + "элементов"}
          >
            {products.length}
          </Tag>
        )}
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div role="list">
        {sortedProducts &&
          sortedProducts.map((p) => (
            <Product
              role="listitem"
              layout={shouldReduceMotion ? false : true}
              key={p._id}
              product={p}
            />
          ))}
      </div>
      <div className={cls.hhTitle}>
        <Htag tag="h2">Вакансии - {page?.category}</Htag>
        <Tag
          color="red"
          size="m"
        >
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page?.hh && (
        <HhData {...page?.hh} />
      )}

      <Htag tag="h2">Преимущества</Htag>

      {page?.advantages && page?.advantages.length > 0 && (
        <Advantages advantages={page?.advantages} />
      )}
      {page?.seoText && (
        <div dangerouslySetInnerHTML={{ __html: page?.seoText }} />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      <div className={cls.tags}>
        {page?.tags.map((t) => (
          <Tag
            key={t}
            color="primary"
            className={cls.tag}
          >
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
};
