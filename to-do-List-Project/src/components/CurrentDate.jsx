import React, { useState, useEffect } from "react";

export function CurrentDate() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;
    
    setFormattedDate(formattedDate);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div style={{fontWeight:"700"}}>
      <p>{formattedDate}</p>
    </div>
  );
}
