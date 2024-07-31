import React, { useEffect } from "react";
import Header from "../components/ui/header";
import CurrencyBlock from "../components/currencyVariant";
import CurrencyInfo from "../components/curencyInfo";
import BackLink from "../components/ui/toBack";
import TalonStore from "../stores/talonStore";

const CurrencyPage: React.FC = () => {
      useEffect(() => {
      TalonStore.setCurrencyData("К");
    }, []);
  return (
    <>
      <Header text="Деньги" type="text" />
      <CurrencyBlock />
      <CurrencyInfo />
      <BackLink />
    </>
  );
};

export default CurrencyPage;
