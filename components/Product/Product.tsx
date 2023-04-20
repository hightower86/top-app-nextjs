import { ProductProps } from "./Product.props";
import cn from "classnames";
import cls from "./Product.module.css";
import { Button, Card, Rating, Tag } from "..";
import { useState } from "react";
import { Divider } from "..";
import { declOfNum, priceRu } from "../../helpers/helpers";
import Image from "next/image";
import { Review } from "../Review/Review";

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

  return (
    <>
      <Card className={cls.product}>
        <div className={cls.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={cls.title}>{product.title}</div>
        <div className={cls.price}>
          <span>
            <span className="visualyHidden">цена</span>
            {priceRu(product.price)}
          </span>
          {product.oldPrice && (
            <Tag
              className={cls.oldPrice}
              color="green"
            >
              <span className="visualyHidden">скидка</span>
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={cls.credit}>
          <span className="visualyHidden">кредит</span>
          {priceRu(product.credit)}/<span className={cls.month}>мес</span>
        </div>
        <div className={cls.rating}>
          <span className="visualyHidden">
            {"рейтинг" + (product.reviewAvg ?? product.initialRating)}
          </span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={cls.tags}>
          {product.categories.map((c) => (
            <Tag
              key={c}
              className={cls.category}
              color="ghost"
            >
              {c}
            </Tag>
          ))}
        </div>
        <div
          className={cls.priceTitle}
          aria-hidden={true}
        >
          цена
        </div>
        <div
          className={cls.creditTitle}
          aria-hidden={true}
        >
          кредит
        </div>
        <div className={cls.rateTitle}>
          {product.reviewCount}{" "}
          {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
        </div>

        <Divider className={cls.hr} />

        <div className={cls.description}>{product.description}</div>
        <div className={cls.feature}>
          {product.characteristics.map((c) => (
            <div
              className={cls.characteristics}
              key={c.name}
            >
              <span className={cls.characteristicsName}>{c.name}</span>
              <span className={cls.characteristicsDots}></span>
              <span className={cls.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={cls.advBlock}>
          {product.advantages && (
            <div className={cls.advantages}>
              <div className={cls.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={cls.disadvantages}>
              <div className={cls.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(cls.hr, cls.hr2)} />
        <div className={cls.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? "down" : "right"}
            className={cls.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      <Card
        color="blue"
        className={cls.reviews}
        // ref={reviewRef}
        tabIndex={isReviewOpened ? 0 : -1}
      >
        {product.reviews.map((r) => (
          <div key={r._id}>
            <Review review={r} />
            <Divider />
          </div>
        ))}
        {/* <ReviewForm
          productId={product._id}
          isOpened={isReviewOpened}
        /> */}
      </Card>
    </>
  );
};
