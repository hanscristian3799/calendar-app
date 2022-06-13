import Calendar from "./components/Calendar";
import Events from "./components/Events";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container-fluid d-flex justify-content-evenly align-items-center vh-100">
          <Calendar />
          <Events />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
