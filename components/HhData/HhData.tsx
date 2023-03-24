import React from "react";
import cls from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import { Card } from "../Card/Card";

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={cls.hh}>
      <Card className={cls.count}>
        <div className={cls.title}>Всего вакансий</div>
        <div className={cls.countValue}>{count}</div>
      </Card>
      <Card className={cls.salary}>
        <div className={cls.title}>Всего вакансий</div>
        <div className={cls.salaryValue}>{count}</div>
        <div className={cls.rate}>{count}</div>
      </Card>
    </div>
  );
};
