import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "react-auth-kit/createStore";
import store from "./redux";

const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

createRoot(document.getElementById("root")).render(
  <AuthProvider store={authStore}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
