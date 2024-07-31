// src/api/getCurrency.ts
import axios from "axios";
import axiosConfig from "./axiosConfig";
import currencyStore from "../stores/currencyStore"; // Импортируем store

const fetchRates = async (): Promise<void> => {
  try {
    const response = await axios.get(
      `${axiosConfig.baseURL}/archive/2024/07/31/daily_json.js`
    );
    const json = response.data;

    const data = {
      USD: [
        parseFloat(json.Valute.USD.Value.toFixed(2)),
        parseFloat(json.Valute.USD.Previous.toFixed(2)),
      ],
      CNY: [
        parseFloat(json.Valute.CNY.Value.toFixed(2)),
        parseFloat(json.Valute.CNY.Previous.toFixed(2)),
      ],
      EUR: [
        parseFloat(json.Valute.EUR.Value.toFixed(2)),
        parseFloat(json.Valute.EUR.Previous.toFixed(2)),
      ],
    };

    currencyStore.setCurrencyData(data); // Обновляем store напрямую
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchRates;
