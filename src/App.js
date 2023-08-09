import "./App.css";
import CountDate from "./components/CountDate/CountDate";
import CountDateRange from "./components/CountDateRange/CountDateRange";
import QuesAnswer from "./components/QuesAnswer/QuesAnswer";
import StepCounter from "./components/StepCounter/StepCounter";
import pizzaData from "./data.js";
function App() {
  return (
    <div className="App">
      <CountDate />
      <CountDateRange />
      <QuesAnswer />
      <StepCounter />
      <Menu />
    </div>
  );
}
export default App;

function Menu() {
  return (
    <>
      <ul className="pizzas">
        {pizzaData.map((pizzaItem, key) => (
          <PizzaList pizzaObj={pizzaItem} key={key} />
        ))}
      </ul>
    </>
  );
}
// props holo akta js object so jokhon destructure korbo tokhon sei prop er nam(obj er nam) ta match thaka lagbe. akhane pizzaObj holo sei prop/obj er nam
function PizzaList({ pizzaObj }) {
  return (
    <>
      <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}
