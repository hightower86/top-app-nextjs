import type { GetStaticProps } from "next";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

const Home = ({ menu }: HomeProps): JSX.Element => {
  return (
    <>
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
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
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
