import { Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainScreen from "./Components/MainScreen/MainScreen.";
import "./Components/MainScreen/MobileScreen.css";
import Footer from "./Components/Footer/Footer";
import Inputs from "./Components/Inputs/Inputs";
import Button from "./Components/Buttons/Buttons";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Components/Header/Header";

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

      <div>
        <Inputs type={"text"} value={"Enter User Name: "} input={undefined} />

        <Inputs
          type={"password"}
          value={"Enter Password: "}
          input={undefined}
        />

        <Button text="Sign In" btn={undefined} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
