import { RatingProps } from "./Rating.props";
import cn from "classnames";
import cls from "./Rating.module.css";
import { useCallback, useEffect, useState } from "react";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = useCallback(
    (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <StarIcon
            className={cn(cls.star, { [cls.filled]: i < currentRating })}
          />
        );
      });
      setRatingArray(updatedArray);
    },
    [ratingArray]
  );

  useEffect(() => {
    constructRating(rating);
  }, [constructRating, rating]);

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
