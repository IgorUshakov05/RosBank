// src/components/CurrencyInfo.tsx
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import currencyStore from "../stores/currencyStore";
import usd from "../assets/imgs/currency/usd.png";
import eur from "../assets/imgs/currency/eur.png";
import yen from "../assets/imgs/currency/yen.png";
import fetchRates from "../api/getCurrency";
import CurrencyInfoItem from "./curencyInfoItem";

const CurrencyInfo: React.FC = observer(() => {
  useEffect(() => {
    const fetchData = () => {
      fetchRates();
    };

    // Вызов функции при монтировании компонента
    fetchData();

    // Запуск интервала на каждые 30 минут
    const intervalId = setInterval(fetchData, 30 * 60 * 1000); // 30 минут в миллисекундах

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const currencyData = currencyStore.formattedCurrencyData;

  if (!currencyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blocks">
      <div className="inline">
        <CurrencyInfoItem
          currencytitle="USD"
          img={usd}
          buy={currencyData.find((item) => item.currency === "USD")?.buy || 0}
          sell={currencyData.find((item) => item.currency === "USD")?.sell || 0}
        />
        <CurrencyInfoItem
          currencytitle="CNY"
          img={yen}
          buy={currencyData.find((item) => item.currency === "CNY")?.buy || 0}
          sell={currencyData.find((item) => item.currency === "CNY")?.sell || 0}
        />
        <CurrencyInfoItem
          currencytitle="EUR"
          img={eur}
          buy={currencyData.find((item) => item.currency === "EUR")?.buy || 0}
          sell={currencyData.find((item) => item.currency === "EUR")?.sell || 0}
        />
      </div>
    </div>
  );
});

export default CurrencyInfo;
