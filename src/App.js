import logo from "./logo.svg";
import "./assets/App.css";
import FirstComponent from "./components/FirstComponent";
import NavBar from "./components/NavBar";
import FirstFnComponent1 from "./components/FirstFnComponent";
import Lorem1 from "./components/Lorem";
import Parent from "./components/Parent";
import UsersApi from "./components/UsersApi";
import ClickCounter from "./components/ClickCounter";
import PolarChart from "./components/PolarChart";
import RenderProps from "./components/RenderProps";
import BootstrapAnimations from "./components/BootstrapAnimations";
import NavbarComponent from "./components/NavbarComponent";
import RoutesComponent from "./components/RoutesComponent";

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
      
      <RoutesComponent/>
      {/* <Parent />
      <FirstFnComponent1 date={Date()} />
      <removePerson />
      {persons.map((person) => {
        return (
          <div>
            <div>
              <FirstComponent
                name={person.name}
                age={person.age}
                city={person.city}
                counter={3}
              ></FirstComponent>
              <button onClick={removePerson}> X </button>
            </div>
          </div>
        );
      })}
      <Lorem1 title="Ipsum Lorem" /> */}
    </div>
  );
}

export default App;
