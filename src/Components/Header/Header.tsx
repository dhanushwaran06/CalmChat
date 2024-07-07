import { Fragment } from "react/jsx-runtime";
import "../Styles/Header.css";

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
              <a href="">{"Home"}</a>
              <a href="">{"Create Session"}</a>
              <a href="">{"Suggest New Features"}</a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
