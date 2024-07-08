import { Fragment } from "react/jsx-runtime";
import "../Styles/Header.css";
import CreatedSession from "../Pages/CreateSession";
import App from "../../App";
import MainScreen from "../MainScreen/MainScreen.";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <Fragment>
      <header className="">
        <div>
          <a href="">{"Calm | Chatbot"}</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/CreateSession">Create Session</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
