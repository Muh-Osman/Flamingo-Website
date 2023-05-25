import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/js/dist/carousel";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Provider } from "react-redux";
import { store } from "./rtk/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// PWA
serviceWorkerRegistration.register();
