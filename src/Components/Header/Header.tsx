import { Fragment } from "react/jsx-runtime";
import "../Styles/Header.css";

type Heade = {
  link: any;
  home: any;
};

export default function Header({ link, home: any, ...Head }) {
  return (
    <Fragment>
      <header className="">
        <div>
          <a href="">{link}</a>
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
