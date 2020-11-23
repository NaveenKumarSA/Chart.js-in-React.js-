import logo from "./logo.svg";
import "./assets/App.css";
import FirstComponent from "./components/FirstComponent";
import Navbar from "./components/Navbar";
import FirstFnComponent1 from "./components/FirstFnComponent";
import Lorem1 from "./components/Lorem";
import Parent from "./components/Parent";
import UsersApi from "./components/UsersApi";
import ClickCounter from "./components/ClickCounter";
import PolarChart from "./components/PolarChart";
function App() {
  
   var state = {
       loading:false,
       title:"",
       fname:"",
       lname:"",
    }
  
  const persons = [
    {
      name: "Naveen",
      age: "25",
      city: "Kanchipuram",
    },
    {
      name: "Daniel",
      age: "27",
      city: "Kanchipuram",
    },
    {
      name: "chen",
      age: "22",
      city: "coimbatore",
    },
    {
      name: "Siva",
      age: "25",
      city: "Thiripur",
    },
  ];

  const removePerson = () => {
    return alert("Button is Clicked");
  };

  return (
    <div className="App">
      {/* <Navbar />
      <Parent />
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
      <div className="chartjs">
        <PolarChart />
      </div>
    </div>
  );
}

export default App;
