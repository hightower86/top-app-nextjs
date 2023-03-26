import { TopPageComponentProps } from "./TopPageComponent.props";
import cls from "./TopPageComponent.module.css";
import { Advantages, HhData, Htag, Ptag, Tag } from "../../components";
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  console.log({ page });
  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        <Htag tag="h1">{page.title}</Htag>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={cls.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag
          color="red"
          size="m"
        >
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}

      <Htag tag="h2">Преимущества</Htag>

      {page.advantages && page.advantages.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}
      {page.seoText && (
        <div dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag
          key={t}
          color="primary"
          className={cls.tag}
        >
          {t}
        </Tag>
      ))}
    </div>
  );
};
