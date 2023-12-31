import { useState, useEffect } from "react";

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(
    
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{fontWeight:"700"}}>
      <p>Time: {currentTime}</p>
    </div>
  );
}
