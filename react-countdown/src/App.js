import React from "react";
import "./App.css";
import Countdown from "./components/Countdown";

const App = () => {
  return (
    <div className="App">
      <Countdown
      /* timeTillDate="07 16 2019, 09:00 am"
        timeFormat="MM DD YYYY, h:mm a" */
      />
    </div>
  );
};

export default App;
