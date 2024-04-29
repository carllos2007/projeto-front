import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <BrowserRouter>

    <NextUIProvider>

      <main className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">
        <App />
      </main>
    </NextUIProvider>
    </BrowserRouter>

  </React.StrictMode>
);
