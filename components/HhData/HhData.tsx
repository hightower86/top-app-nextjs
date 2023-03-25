import React from "react";
import cls from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import { Card } from "../Card/Card";
import RateIcon from "./rate.svg";
import { priceRu } from "../../helpers/helpers";

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={cls.hh}>
      <Card className={cls.count}>
        <div className={cls.title}>Всего вакансий</div>
        <div className={cls.countValue}>{count}</div>
      </Card>
      <Card className={cls.salary}>
        <div>
          <div className={cls.title}>Начальный</div>
          <div className={cls.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={cls.rate}>
            <RateIcon className={cls.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={cls.title}>Средний</div>
          <div className={cls.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={cls.rate}>
            <RateIcon className={cls.filled} />
            <RateIcon className={cls.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={cls.title}>Профессионал</div>
          <div className={cls.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={cls.rate}>
            <RateIcon className={cls.filled} />
            <RateIcon className={cls.filled} />
            <RateIcon className={cls.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
