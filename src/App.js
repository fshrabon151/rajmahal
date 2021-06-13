import "./App.css";
import MainComponents from "./Components/MainComponents";

import { Provider } from "react-redux";
import myStore from "./redux/store";

function App() {

  return (
    <div className="App">
      <Provider store={myStore}>
        <MainComponents />
      </Provider>
    </div>
  );
}

export default App;
