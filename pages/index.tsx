import type { NextPage } from "next";
import { Button, Htag } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
    </div>
  );
};

export default Home;
