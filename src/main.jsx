import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MyAppProvider } from "./myContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const myQueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyAppProvider>
    <QueryClientProvider client={myQueryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </MyAppProvider>
);
