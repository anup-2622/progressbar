import "./App.css";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="App">
      <div className="bg-red-300 w-screen h-screen">
        <Progress duration={60} />
      </div>
    </div>
  );
}

export default App;
