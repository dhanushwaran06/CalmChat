import { Fragment } from "react/jsx-runtime";
import "../Styles/Header.css";
import CreatedSession from "../Pages/CreateSession";
import App from "../../App";
import MainScreen from "../MainScreen/MainScreen.";

export default function Header() {
  return (
    <Fragment>
      <header className="">
        <div>
          <a href="">{"Calm | Chatbot"}</a>
        </div>
      </header>
    </Fragment>
  );
}
