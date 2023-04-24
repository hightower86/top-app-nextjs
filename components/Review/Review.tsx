import { ReviewProps } from "./Review.props";
import cls from "./Review.module.css";
import UserIcon from "./user.svg";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";
import { motion } from "framer-motion";

export const Review = ({
  review,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      <div
        className={cn(cls.review, className)}
        {...props}
      >
        <UserIcon className={cls.user} />
        <div className={cls.title}>
          <span className={cls.name}>{name}:</span>&nbsp;&nbsp;
          <span>{title}</span>
        </div>
        <div className={cls.date}>
          {format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}
        </div>
        <div className={cls.rating}>
          <Rating rating={rating} />
        </div>
        <div className={cls.description}>{description}</div>
      </div>
    </motion.div>
  );
};
