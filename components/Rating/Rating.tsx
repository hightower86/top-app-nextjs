import { RatingProps } from "./Rating.props";
import cn from "classnames";
import cls from "./Rating.module.css";
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from "react";
import StarIcon from "./star.svg";

export const Rating = forwardRef(
  (
    { isEditable, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(
        <>
          <StarIcon />
        </>
      )
    );

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

    const handleSpace = (r: number, e: KeyboardEvent) => {
      if (e.code !== "Space" || !setRating) {
        return;
      }
      setRating(r);
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
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };

    useEffect(() => {
      if (!isEditable) {
        return;
      }
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    useEffect(() => {
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <div
        {...props}
        ref={ref}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
      </div>
    );
  }
);
