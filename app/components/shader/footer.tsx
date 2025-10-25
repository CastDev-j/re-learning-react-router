import { FiGithub } from "react-icons/fi";
import { NavLink } from "react-router";
import { authors, githubRepo, routes, SITE_NAME } from "~/config";
import { cn } from "~/lib/cn";

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-950 border-t border-neutral-800 text-neutral-400">
      <div className="container mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <h3 className="mb-3 text-lg font-semibold text-neutral-200">
            Probando React Router como Framework
          </h3>
          <p className="text-sm">
            <span className="text-red-500 font-semibold">{SITE_NAME}</span>{" "}
            Proyecto de aprendizaje y experimentación con React Router y
            tecnologías web modernas.
          </p>
        </div>

        <nav>
          <h4 className="mb-3 text-sm font-semibold text-neutral-200">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            {routes.map((r) => (
              <li key={r.path}>
                <NavLink
                  to={r.path}
                  className={({ isActive }) =>
                    cn(
                      "hover:text-neutral-200 transition-colors",
                      isActive && "text-neutral-200"
                    )
                  }
                >
                  {r.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-neutral-200">
            Integrantes
          </h4>
          <ul className="space-y-2 text-sm">
            {authors.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-neutral-200">
            Recursos
          </h4>
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition-colors flex items-center gap-2 text-sm"
          >
            <FiGithub className="size-4" />
            GitHub
          </a>
        </div>

        <p className="pt-4 border-t border-neutral-800 text-xs text-center text-neutral-500 col-span-2">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
