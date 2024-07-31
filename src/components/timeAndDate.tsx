import React, { useState, useEffect } from "react";

const formatDateTime = (date:any) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return [`${hours}:${minutes}`,`${day}.${month}.${year}`];
};

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => setDateTime(new Date());

    const intervalId = setInterval(updateDateTime, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dateTimeParent">
      <p className="time">{formatDateTime(dateTime)[0]}</p>
      <p className="time date">{formatDateTime(dateTime)[1]}</p>
    </div>
  );
};

export default CurrentDateTime;
