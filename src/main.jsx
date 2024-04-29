import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <NextUIProvider>
        <main className="w-screen h-screen dark text-foreground bg-background p-8 flex items-start justify-center">
          <App />
        </main>
      </NextUIProvider>
    </RouterProvider>
  </React.StrictMode >
);
