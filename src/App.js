import Calendar from "./components/Calendar";
import Events from "./components/Events";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid d-flex justify-content-evenly align-items-center vh-100">
        <Calendar />
        <Events />
      </div>
    </Provider>
  );
}

export default App;
