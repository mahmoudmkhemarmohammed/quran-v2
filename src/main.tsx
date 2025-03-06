import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Global Styles
import "@styles/index.css";

// axios global
import "@services/axios-global";
import AppRouter from "@routes/AppRouter";

// React Query Configuration
const queryClient = new QueryClient();

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "@store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
