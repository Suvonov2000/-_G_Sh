import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "react-auth-kit/createStore";
import store from "./redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const authStore = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthProvider store={authStore}>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
