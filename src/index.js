import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.REACT_APP_CONVEX_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConvexProvider client={convex}>
    <App />
  </ConvexProvider>
);
