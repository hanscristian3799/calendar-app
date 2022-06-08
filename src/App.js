import "./style/style.css";
import Calendar from "./components/Calendar";
import Event from "./components/Event";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Calendar />
        <Event />
      </div>
    </Provider>
  );
}

export default App;
