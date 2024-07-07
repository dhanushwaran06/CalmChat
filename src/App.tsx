import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3000/")
      .then((res) => res.data)
      .then((res) => setData(res));
  });

  return <h2>{data}</h2>;
}

export default App;
