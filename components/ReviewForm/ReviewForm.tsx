import { ReviewFormProps } from "./ReviewForm.props";
import cls from "./ReviewForm.module.css";
import CloseIcon from "./close.svg";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { TextArea } from "../TextArea/TextArea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";

import { useState } from "react";
import { API } from "../../helpers/api";
import { motion } from "framer-motion";

export const ReviewForm = ({
  productId,
  isOpened,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={cn(cls.reviewForm, className)}
          {...props}
        >
          <Input
            {...register("name", {
              required: { value: true, message: "Заполните имя" },
            })}
            placeholder="Имя"
            error={errors.name}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.name ? true : false}
          />
          <Input
            {...register("title", {
              required: { value: true, message: "Заполните заголовок" },
            })}
            placeholder="Заголовок отзыва"
            className={cls.title}
            error={errors.title}
            tabIndex={isOpened ? 0 : -1}
            aria-invalid={errors.title ? true : false}
          />
          <div className={cls.rating}>
            <span>Оценка:</span>
            <Controller
              control={control}
              name="rating"
              rules={{ required: { value: true, message: "Укажите рейтинг" } }}
              render={({ field }) => (
                <Rating
                  isEditable
                  rating={field.value}
                  ref={field.ref}
                  setRating={field.onChange}
                  error={errors.rating}
                  tabIndex={isOpened ? 0 : -1}
                />
              )}
            />
          </div>
          <TextArea
            {...register("description", {
              required: { value: true, message: "Заполните описание" },
            })}
            placeholder="Текст отзыва"
            className={cls.description}
            error={errors.description}
            tabIndex={isOpened ? 0 : -1}
            aria-label="Текст отзыва"
            aria-invalid={errors.description ? true : false}
          />
          <div className={cls.submit}>
            <Button
              appearance="primary"
              tabIndex={isOpened ? 0 : -1}
              onClick={() => clearErrors()}
            >
              Отправить
            </Button>
            <p className={cls.info}>
              * Перед публикацией отзыв пройдет предварительную модерацию и
              проверку
            </p>
          </div>
        </div>
        {isSuccess && (
          <div
            className={cn(cls.success, cls.panel)}
            role="alert"
          >
            <div className={cls.successTitle}>Ваш отзыв отправлен</div>
            <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
            <button
              onClick={() => setIsSuccess(false)}
              className={cls.close}
              aria-label="Закрыть оповещение"
            >
              <CloseIcon />
            </button>
          </div>
        )}
        {error && (
          <div
            className={cn(cls.error, cls.panel)}
            role="alert"
          >
            Что-то пошло не так, попробуйте обновить страницу
            <button
              onClick={() => setError(undefined)}
              className={cls.close}
              aria-label="Закрыть оповещение"
            >
              <CloseIcon />
            </button>
          </div>
        )}
      </form>
    </motion.div>
  );
};
