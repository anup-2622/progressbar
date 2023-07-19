import "./App.css";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="App">
      <div className=" w-screen h-screen">
        <h2 className="mt-2">Countdown Timer:</h2>
        <Progress duration={60} />
      </div>
    </div>
  );
}

export default App;
