import React from "react";
import { Htag } from "../components";
import { withLayout } from "../layout/Layout";

export function Error404(): JSX.Element {
  return (
    <div className="centered">
      <Htag tag="h1">Ошибка 404</Htag>
    </div>
  );
}

export default withLayout(Error404);
