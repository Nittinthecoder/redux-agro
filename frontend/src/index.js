import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from "./redux/store";

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
