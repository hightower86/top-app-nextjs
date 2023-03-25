import { TopPageComponentProps } from "./TopPageComponent.props";
import cls from "./TopPageComponent.module.css";
import { HhData, Htag, Tag } from "../../components";
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
        {products && (
          <Tag
            color="gray"
            size="m"
          >
            {products.length}
          </Tag>
        )}
        <span>сортировка</span>
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
        <span>сортировка</span>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
