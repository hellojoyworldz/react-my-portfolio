import React from "react";
import { GoToLink } from "../GoToLink";
import styles from "./ListNormal.style.module.scss";
import { IMG_PATH } from "../../constants/path";
import { data, Item, sbj } from "./data";

export const ListNormal = ({
  bgcolor = "#c2aeec",
  title = sbj,
  items = data,
  className,
}: {
  bgcolor?: string;
  title?: string;
  items?: Item[];
  className?: string;
}) => {
  return (
    <section
      className={`${styles["listNormal"]} ${className || ""}`}
      data-bgcolor={bgcolor}
    >
      {title ? <h2 className={styles["titleType2"]}>{title}</h2> : null}
      {items ? (
        <div className={styles["listType2"]}>
          <ul className={styles["list"]}>
            {items.map((item) => (
              <li
                key={item.id}
                className={styles["list__item"]}
                data-scroll
                data-scroll-speed={item.speed || 2}
                ata-scroll-direction="vertical"
              >
                <div className={styles["list__info"]}>
                  {item.type ? (
                    <span
                      className={`${styles[`cate--${item.type}`]} ${
                        styles["list__cate"]
                      } cate--${item.type}`}
                    >
                      {item.type}
                    </span>
                  ) : null}
                  {item.title ? (
                    <strong className={styles["list__tit"]}>
                      {item.title}
                    </strong>
                  ) : null}
                  {item.desc ? (
                    <div className={styles["list__desc"]}>{item.desc}</div>
                  ) : null}
                  <div className={styles["list__type"]}>
                    {item.github ? (
                      <GoToLink
                        to={item.github}
                        className={styles["list__typeLink"]}
                      >
                        Github
                      </GoToLink>
                    ) : null}
                    {item.site ? (
                      <GoToLink
                        to={item.site}
                        className={styles["list__typeLink"]}
                      >
                        Site
                      </GoToLink>
                    ) : null}
                  </div>
                </div>
                {item.thumb ? (
                  <div className={styles["list__thumb"]}>
                    <img
                      data-speed="auto"
                      src={item.thumb}
                      alt={item.alt ? item.alt : item.title ? item.title : ""}
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
