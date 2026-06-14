import { Link, Outlet } from "@tanstack/react-router";
import MainLayout from "../components/MainLayout";

export default function RootLayout() {
  return (
    <MainLayout>
      <div>
        <Link to="/">Home</Link>
      </div>
      <hr />
      <Outlet />
    </MainLayout>
  );
}
