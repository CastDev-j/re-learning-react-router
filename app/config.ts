interface Route {
  label: string;
  path: string;
}

export const routes: Route[] = [
  { label: "Inicio", path: "/" },
  { label: "First Test", path: "/first-test" },
  { label: "Second Test", path: "/second-test" },
];

export const authors = ["CastDev-j"];
export const githubRepo =
  "https://github.com/CastDev-j/re-learning-react-router";
export const SITE_NAME = "React Router Framework";
