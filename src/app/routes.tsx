import { createBrowserRouter, Outlet, Navigate } from "react-router";
import { Sidebar } from "./components/sidebar";
import { ContentPage } from "./components/content-page";
import { ProgramsPage } from "./components/programs-page";
import { MediaPage } from "./components/media-page";

export function createAppRouter(onLogout: () => void) {
  function Layout() {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar onLogout={onLogout} />
        <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    );
  }

  return createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, element: <Navigate to="/content" replace /> },
        { path: "content", Component: ContentPage },
        { path: "programs", Component: ProgramsPage },
        { path: "media", Component: MediaPage },
      ],
    },
  ]);
}
