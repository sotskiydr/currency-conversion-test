import { getOneCurrency } from "../../api/api-services";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

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
    <div>
      <ul>
        {data.map((el) => {
          return <li key={nanoid()}>{`${el.base}: ${el.result.UAH}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
