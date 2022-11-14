import ToDoApp from "./components/ToDoApp";
import background from "./assets/background.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ToDoApp />
    </div>
  );
}

export default App;
