import { useState, useMemo } from "react";
import { RouterProvider } from "react-router";
import { LoginPage } from "./components/login-page";
import { createAppRouter } from "./routes";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useMemo(() => createAppRouter(() => setLoggedIn(false)), []);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return <RouterProvider router={router} />;
}
