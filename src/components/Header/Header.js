import { getOneCurrency } from "../../api/api-services";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Header.module.scss";
const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOneCurrency(["USD", "UAH"]).then((data) =>
      setData((prevState) => {
        return [...prevState, data];
      })
    );
    getOneCurrency(["EUR", "UAH"]).then((data) =>
      setData((prevState) => {
        return [...prevState, data];
      })
    );
  }, [setData]);

  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        {data.map((el) => {
          return (
            <li
              className={styles.item}
              key={nanoid()}
            >{`${el.base}: ${el.result.UAH}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
