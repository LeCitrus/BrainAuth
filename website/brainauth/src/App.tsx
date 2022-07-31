import "./App.css";
import { Forms } from "./Form";

function App() {
  return (
    <div className="App">
      <Forms
        onSubmit={({ firstName, lastName }) => {
          console.log(firstName, lastName);
        }}
      />
    </div>
  );
}

export default App;
