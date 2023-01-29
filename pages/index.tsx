import type { NextPage } from "next";
import { Button, Htag, Ptag, Tag } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <Ptag size="l">
        Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и
        ими можно успешно пользоваться дома или в дороге. Современные ноутбуки
        хорошо справляются с нагрузкой, так зачем загонять специалиста в душный
        офис. В этой профессии важным считается вдохновение, поэтому дизайнеры
        ищут его в разных местах.
      </Ptag>
      <Tag size="s" color="ghost">
        small ghost
      </Tag>
      <Tag size="m" color="gray">
        medium gray
      </Tag>
      <Tag size="s" color="green">
        10 green
      </Tag>
      <Tag size="m" color="primary">
        10 primary
      </Tag>
      <Tag size="s" color="red" href="https://google.com">
        10 red
      </Tag>
    </div>
  );
};

export default Home;
