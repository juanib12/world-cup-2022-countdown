import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./img/argentina.png";

class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cuenta Regresiva Mundial 2022</h2>
        </div>
        {/* <h3 className="title">
          Lo que falta para que la SCALONETA detone colas europeas!:
        </h3> */}

        <Countdown date={`${year}-11-20T13:00:00`} />
      </div>
    );
  }
}

export default App;
