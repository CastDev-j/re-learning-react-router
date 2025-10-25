import { useState } from "react";
import { NavLink } from "react-router";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaRoute } from "react-icons/fa";
import { routes, SITE_NAME } from "~/config";
import { cn } from "~/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-neutral-950 text-white border-b border-neutral-700 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink
              viewTransition
              to="/"
              className="p-2 rounded-md flex items-center gap-2 hover:bg-neutral-800 transition-all"
            >
              <FaRoute className="text-red-500 size-6" />
              <span className="font-semibold">{SITE_NAME}</span>
            </NavLink>

            <nav className="hidden md:flex items-center gap-6">
              {routes.map((r) => (
                <NavLink
                  viewTransition
                  key={r.path}
                  to={r.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium transition-all text-neutral-400 hover:text-neutral-200",
                      isActive && "text-white"
                    )
                  }
                >
                  {r.label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? (
                <HiOutlineX className="size-6" />
              ) : (
                <HiOutlineMenu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      <nav
        className={cn(
          "fixed inset-0 bg-neutral-950 z-20 md:hidden transition-all flex flex-col",
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="p-4 border-b border-neutral-700 flex items-center justify-between">
          <span className="font-semibold text-white">Menú</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            aria-label="Cerrar menú"
          >
            <HiOutlineX className="size-6" />
          </button>
        </div>

        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {routes.map((r) => (
            <NavLink
              viewTransition
              key={r.path}
              to={r.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-4 rounded-md text-lg font-medium transition-all",
                  "text-neutral-300 hover:text-white hover:bg-neutral-900",
                  isActive && "text-white bg-neutral-900"
                )
              }
            >
              {r.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
