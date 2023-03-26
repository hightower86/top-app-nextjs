import React from "react";
import { Htag } from "../Htag/Htag";
import { AdvantagesProps } from "./Advantages.props";
import cls from "./Advantages.module.css";
import AdvIcon from "./advIcon.svg";
import { Ptag } from "../Ptag/Ptag";

export const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <>
      {advantages.map((adv) => (
        <div
          key={adv._id}
          className={cls.advantage}
        >
          <AdvIcon />
          <Htag
            tag="h3"
            className={cls.advTitle}
          >
            {adv.title}
          </Htag>

          <hr className={cls.vline} />
          <Ptag
            size="m"
            className={cls.description}
          >
            {adv.description}
          </Ptag>
        </div>
      ))}
    </>
  );
};
