import React from "react";
import Header from "../components/ui/header";
import LeftSide from "../components/rightSide";
import TalonInfo from "../components/TalonInfo";

const TalonPage: React.FC = () => {

  return (
    <>
      <Header text="" type="talon" />
      <TalonInfo />
      <LeftSide />
    </>
  );
};

export default TalonPage;
