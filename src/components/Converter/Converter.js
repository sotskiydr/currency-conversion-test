import { getAllCurrency, onConvert } from "../../api/api-services";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import styles from "./Converter.module.scss";
const Converter = () => {
  const [currency, setCurrency] = useState([]);
  const [baseValue, setValue] = useState({
    inputFrom: "",
    inputTo: "",
    optionFrom: "USD",
    optionTo: "UAH",
  });

  useEffect(() => {
    getAllCurrency(baseValue.optionFrom).then((data) => {
      setValue((prevState) => {
        return { ...prevState, optionFrom: data.base };
      });
      setCurrency(Object.entries(data.results));
    });
  }, [setCurrency, baseValue.optionFrom]);

  const getConvertData = (from, to, amount, action) => {
    if (action === "from") {
      return onConvert(from, to, amount).then((data) =>
        setValue((prevState) => {
          return { ...prevState, inputTo: Object.values(data.result)[0] };
        })
      );
    }
    if (action === "to") {
      return onConvert(from, to, amount).then((data) =>
        setValue((prevState) => {
          return { ...prevState, inputFrom: Object.values(data.result)[0] };
        })
      );
    }
  };

  const handleChange = (e, action) => {
    if (e.target.value < 1) {
      setValue((prevState) => {
        return { ...prevState, inputFrom: "", inputTo: "" };
      });
      return;
    }

    switch (action) {
      case "from":
        setValue((prevState) => {
          return { ...prevState, inputFrom: e.target.value };
        });
        getConvertData(
          baseValue.optionFrom,
          baseValue.optionTo,
          e.target.value,
          action
        );
        break;
      case "to":
        setValue((prevState) => {
          return { ...prevState, inputTo: e.target.value };
        });
        getConvertData(
          baseValue.optionTo,
          baseValue.optionFrom,
          e.target.value,
          action
        );
        break;
      case "fromSelect":
        setValue((prevState) => {
          return { ...prevState, optionFrom: e.target.value };
        });
        break;
      case "toSelect":
        setValue((prevState) => {
          return { ...prevState, optionTo: e.target.value };
        });
        break;
      default:
        return null;
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.from}>
        <input
          placeholder="change value"
          className={styles["input-from"]}
          name="input-from"
          type="number"
          value={baseValue.inputFrom}
          onChange={(e) => {
            handleChange(e, "from");
          }}
        />

        <select
          className={styles["select-from"]}
          name="from"
          value={baseValue.optionFrom}
          onChange={(e) => {
            handleChange(e, "fromSelect");
          }}
        >
          {currency.map(([key]) => {
            return (
              <option className={styles["option"]} key={nanoid()} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>

      <div className={styles.to}>
        <input
          placeholder="change value"
          className={styles["input-to"]}
          name="input-to"
          type="number"
          value={baseValue.inputTo}
          onChange={(e) => {
            handleChange(e, "to");
          }}
        />

        <select
          className={styles["select-to"]}
          name="to"
          value={baseValue.optionTo}
          onChange={(e) => {
            handleChange(e, "toSelect");
          }}
        >
          {currency.map(([key]) => {
            return (
              <option className={styles["option"]} key={nanoid()} value={key}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default Converter;
