import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContext from "./context/productsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContext>
  </React.StrictMode>,
  document.getElementById("root")
);
