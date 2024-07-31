import React, { useEffect } from "react"
import Header from "../components/ui/header"
import FizFaceVariant from "../components/FizFaceVariant";
import BackLink from "../components/ui/toBack";
import TalonStore from '../stores/talonStore'

const LawyerPage: React.FC = () => {
  useEffect(() =>{
    TalonStore.setCurrencyData('Ю');
  }, [])
    return (
      <>
        <Header text="Обслуживание юридических лиц" type="text" />
        <FizFaceVariant />
        <BackLink />
      </>
    );
}

export default LawyerPage;