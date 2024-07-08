import { Fragment } from "react/jsx-runtime";
import "../Styles/MainBody.css";
import "../Styles/Mobile.css";
import Header from "../../NavBar/NavBar";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <h1 className="Heading1">Would You Like to Chat with Bot</h1>
        <h2 className="job">A Bot That Calms People from Stress</h2>
      </div>
    </Fragment>
  );
};

export default HomePage;
