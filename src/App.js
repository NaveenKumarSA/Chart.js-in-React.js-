import logo from "./logo.svg";
import "./assets/App.css";
import FirstComponent from "./components/FirstComponent";
import NavBar from "./components/NavBar";
import anything2, { FirstFnComponent } from "./components/FirstFnComponent";
import TimerWithLifeCycleComponents from "./components/TimerWithLifeCycleComponents";
import UsersApi from "./components/UsersApi";

import ClickCounter from "./components/ClickCounter";
import PolarChart from "./components/PolarChart";
import GoogleFonts from "./components/GoogleFonts";
import BootstrapAnimations from "./components/BootstrapAnimations";
import NavbarComponent from "./components/NavbarComponent";
import RoutesComponent from "./components/RoutesComponent";
import AxiosApi from "./components/AxiosApi";
import CountUpAnimations from "./components/CountUpAnimations";
import SetIntervalAnimations from "./components/SetIntervalAnimations";
import GoogleMaps from "./components/GoogleMaps";
function App() {
  var state = {
    loading: false,
    title: "",
    fname: "",
    lname: "",
  };

  const removePerson = () => {
    return alert("Button is Clicked");
  };

  return (
    <div className="App">
      <ClickCounter />
    </div>
  );
}

export default App;
