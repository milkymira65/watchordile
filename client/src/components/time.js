import React from "react";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
export function Time() {
  const [runTime, setRunTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setRunTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <Text className="runtime" fontSize={"2rem"} >
      {runTime}
    </Text>
  );
}
