import ReactDOM from "react-dom/client";
import ClockProvider from "./store/context/clock.jsx";
import ModeProvider from "./store/context/mode.jsx";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/redux/location.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ModeProvider>
      <ClockProvider>
        <App />
      </ClockProvider>
    </ModeProvider>
  </Provider>
);
