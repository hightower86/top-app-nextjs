import type { NextPage } from "next";
import { Button, Htag, Ptag } from "../components";

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
    </div>
  );
};

export default Home;
