import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./views/App/App";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
