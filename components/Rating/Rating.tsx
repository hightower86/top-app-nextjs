import { RatingProps } from "./Rating.props";
import cn from "classnames";
import cls from "./Rating.module.css";
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  debugger;
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const changeDisplay = (r: number) => {
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
    debugger;
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

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
