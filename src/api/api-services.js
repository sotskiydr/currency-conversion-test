import axios from "axios";

const key = "c872c33bcc-eb0433fc41-r7f371";

export async function getAllCurrency(query) {
  try {
    const { data } = await axios.get(
      `https://api.fastforex.io/fetch-all?from=${query}&api_key=${key}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneCurrency([from, to]) {
  try {
    const { data } = await axios.get(
      `https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=${key}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function onConvert(from, to, amount) {
  try {
    const { data } = await axios.get(
      `https://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${key}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
