import { Fragment } from "react/jsx-runtime";

type Heade = {
  link: any;
  home: any;
};

export default function Header({ link, home: any, ...Head }) {
  return (
    <Fragment>
      <header>
        <a href="">{link}</a>
      </header>
    </Fragment>
  );
}
