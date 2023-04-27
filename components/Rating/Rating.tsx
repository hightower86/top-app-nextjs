/* eslint-disable react-hooks/exhaustive-deps */
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import cls from "./Rating.module.css";
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
  useRef,
} from "react";
import StarIcon from "./star.svg";

export const Rating = forwardRef(
  (
    {
      isEditable = false,
      error,
      rating,
      setRating,
      tabIndex,
      ...props
    }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(
        <>
          <StarIcon />
        </>
      )
    );
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      if (!isEditable) {
        return;
      }
      constructRating(rating);
    }, [rating]);

    useEffect(() => {
      constructRating(rating);
    }, []);

    const changeDisplay = (r: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      constructRating(r);
    };
    const onStarIconClick = (r: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(r);
    };

    const computeFocus = (r: number, i: number): number => {
      if (!isEditable) {
        return -1;
      }
      if (!rating && i == 0) {
        return tabIndex ?? 0;
      }
      if (r == i + 1) {
        return tabIndex ?? 0;
      }
      return -1;
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            className={cn(cls.star, {
              [cls.filled]: i < currentRating,
              [cls.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onStarIconClick(i + 1)}
            tabIndex={computeFocus(rating, i)}
            onKeyDown={handleKey}
            ref={(r) => ratingArrayRef.current?.push(r)}
            role={isEditable ? "slider" : ""}
            aria-invalid={error ? true : false}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-label={isEditable ? "Укажите рейтинг" : "рейтинг" + rating}
            aria-valuemin={1}
          >
            <StarIcon />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (!isEditable || !setRating) {
        return;
      }
      if (e.code == "ArrowRight" || e.code == "ArrowUp") {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }
        ratingArrayRef.current[rating]?.focus();
      }
      if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
        ratingArrayRef.current[rating - 2]?.focus();
      }
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(cls.ratingWrapper, {
          [cls.error]: error,
        })}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && (
          <span
            role="alert"
            className={cls.errorMessage}
          >
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
