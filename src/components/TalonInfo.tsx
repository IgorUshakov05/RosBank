import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TalonStore from "../stores/talonStore";

const TalonInfo: React.FC = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  // Рассчитываем ширину линии в процентах
  const lineWidth = (time / 5) * 100;

  return (
    <div className="talonInfo">
      <h3 className="TalonNumber">Номер талона</h3>
      <h1 className="yourTalonNumber">{TalonStore.getTalon}</h1>
      <div className="blockBack">
        <Link to={"/"} className="itemMethonOfCurrency card default w-70">
          <p className="relative toMain">На главную</p>
          <p className="relative toMain">Выход через {5 - time}</p>
        </Link>
        <div
          className="line"
          style={{
            width: `${lineWidth}%`,
            transition: "width 1s linear", // Плавный переход ширины
          }}
        ></div>
      </div>
    </div>
  );
};

export default TalonInfo;
