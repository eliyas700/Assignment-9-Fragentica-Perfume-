import { useEffect, useState } from "react";

const useDashboard = () => {
  const [dash, setDash] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDash(data));
  }, []);
  return [dash, setDash];
};
export default useDashboard;
