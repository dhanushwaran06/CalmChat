import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header/Header";
import MainScreen from "./Components/MainScreen/MainScreen.";
import "./Components/MainScreen/MobileScreen.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    Axios.get("http://www.localhost:3000/")
      .then((res) => res.data)
      .then((res) => setData(res));
  });

  return (
    <div>
      <Header />
      <MainScreen />

      {/* <h2 className="text-3xl">{data}</h2> */}

      <Footer />
    </div>
  );
}

export default App;
