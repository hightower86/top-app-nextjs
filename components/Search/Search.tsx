import { SearchProps } from "./Search.props";
import classNames from "classnames";
import cls from "./Search.module.css";
import { Button, Input } from "..";
import { useState, KeyboardEvent } from "react";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <div
      className={classNames(cls.p, cls.search, className)}
      {...props}
    >
      <Input
        className={cls.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance={"primary"}
        className={cls.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
