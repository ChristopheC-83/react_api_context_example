import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ACProvider from "./Context/API Provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ACProvider>
    <App />
  </ACProvider>
);
