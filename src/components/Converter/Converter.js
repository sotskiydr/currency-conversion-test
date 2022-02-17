import { getAllCurrency, onConvert } from "../../api/api-services";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

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
    if (e.target.value <= 0) return;
    if (action === "from") {
      setValue((prevState) => {
        return { ...prevState, inputFrom: e.target.value };
      });
      getConvertData(
        baseValue.optionFrom,
        baseValue.optionTo,
        e.target.value,
        action
      );
    }
    if (action === "to") {
      setValue((prevState) => {
        return { ...prevState, inputTo: e.target.value };
      });
      getConvertData(
        baseValue.optionTo,
        baseValue.optionFrom,
        e.target.value,
        action
      );
    }
  };

  const handleSelectChange = (e, action) => {
    action === "from"
      ? setValue((prevState) => {
          return { ...prevState, optionFrom: e.target.value };
        })
      : setValue((prevState) => {
          return { ...prevState, optionTo: e.target.value };
        });
  };

  return (
    <form>
      <label>
        From
        <input
          name="input-from"
          type="number"
          value={baseValue.inputFrom}
          onChange={(e) => {
            handleChange(e, "from");
          }}
        />
      </label>
      <select
        name="from"
        value={baseValue.optionFrom}
        onChange={(e) => {
          handleSelectChange(e, "from");
        }}
      >
        {currency.map(([key]) => {
          return (
            <option key={nanoid()} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <label>
        To
        <input
          name="input-to"
          type="number"
          value={baseValue.inputTo}
          onChange={(e) => {
            handleChange(e, "to");
          }}
        />
      </label>
      <select
        name="to"
        value={baseValue.optionTo}
        onChange={(e) => {
          handleSelectChange(e, "to");
        }}
      >
        {currency.map(([key]) => {
          return (
            <option key={nanoid()} value={key}>
              {key}
            </option>
          );
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Converter;
