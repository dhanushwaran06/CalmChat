import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import MainScreen from "./Components/MainScreen/MainScreen.";
import "./Components/MainScreen/MobileScreen.css";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3000/")
      .then((res) => res.data)
      .then((res) => setData(res));
  });

  return (
    <div>
      <Header link={"Calm Chat"} home={"/"} />
      <MainScreen />

      <h2 className="text-3xl">{data}</h2>
    </div>
  );
}

export default App;
