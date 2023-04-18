import type { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Input, Ptag, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

const Home = ({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Button</Button>
      <Button
        appearance="ghost"
        arrow="down"
      >
        Button
      </Button>
      <Ptag size="l">
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
        ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
        офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </Ptag>
      <Tag
        size="s"
        color="ghost"
      >
        small ghost
      </Tag>
      <Tag
        size="m"
        color="gray"
      >
        medium gray
      </Tag>
      <Tag
        size="s"
        color="green"
      >
        10 green
      </Tag>
      <Tag
        size="m"
        color="primary"
      >
        10 primary
      </Tag>
      <Tag
        size="s"
        color="red"
        href="https://google.com"
      >
        10 red
      </Tag>
      <Rating
        rating={rating}
        setRating={setRating}
        isEditable
      />
      <Input placeholder="Input" />
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem._id.secondCategory}>
            {menuItem._id.secondCategory}
          </li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
