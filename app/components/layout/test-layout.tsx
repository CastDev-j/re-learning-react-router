import { Outlet } from "react-router";

export default function TestLayout() {
  return (
    <div className="flex flex-col gap-4 p-4 my-4 mx-2 container text-neutral-50">
      <Outlet />
    </div>
  );
}
