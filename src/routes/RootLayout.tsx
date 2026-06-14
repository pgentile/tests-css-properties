import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import MainLayout from "../components/MainLayout";

export default function RootLayout() {
  return (
    <MainLayout>
      <div>
        <Link to="/">Home</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </MainLayout>
  );
}
