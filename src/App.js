import Calendar from "./components/Calendar";
import Event from "./components/Event";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid d-flex justify-content-evenly vh-100">
        <Calendar />
        <Event />
      </div>
    </Provider>
  );
}

export default App;
