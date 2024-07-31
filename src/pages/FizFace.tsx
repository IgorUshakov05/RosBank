import React, { useEffect } from "react"
import Header from "../components/ui/header"
import FizFaceVariant from "../components/FizFaceVariant";
import BackLink from "../components/ui/toBack";
import TalonStore from '../stores/talonStore'
const FizFace: React.FC = () => {
  useEffect(() => {
    TalonStore.setCurrencyData("Ф");
  }, []);
    return (
      <>
        <Header text="Обслуживание физических лиц" type="text" />
        <FizFaceVariant />
        <BackLink />
      </>
    );
}

export default FizFace;