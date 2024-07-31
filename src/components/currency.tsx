import React, { useEffect } from "react";
import usd from "../assets/imgs/currency/usd.png";
import eur from "../assets/imgs/currency/eur.png";
import yen from "../assets/imgs/currency/yen.png";
import CurrencyItem from "./currencyItem";
import fetchRates from "../api/getCurrency";
import currencyStore from "../stores/currencyStore";
import { observer } from "mobx-react";

const Currency: React.FC = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchRates();
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 30 * 60 * 1000); // 30 минут в миллисекундах

    return () => clearInterval(intervalId);
  }, []);

  const currencyData = currencyStore.formattedCurrencyData;

  if (!currencyData) {
    return <div>Loading...</div>; // Можно добавить спиннер или сообщение о загрузке
  }

  return (
    <React.Fragment>
      <div className="allCurrency">
        <CurrencyItem
          currency="USD"
          img={usd}
          price={currencyData.find((item) => item.currency === "USD")?.buy || 0}
        />
        <CurrencyItem
          currency="EUR"
          img={eur}
          price={currencyData.find((item) => item.currency === "EUR")?.buy || 0}
        />
        <CurrencyItem
          currency="CNY"
          img={yen}
          price={currencyData.find((item) => item.currency === "CNY")?.buy || 0}
        />
      </div>
    </React.Fragment>
  );
});

export default Currency;
