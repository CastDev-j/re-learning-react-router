import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout/test-layout.tsx", [
    index("routes/home.tsx"),
    route("first-test", "routes/first.tsx"),
    route("second-test", "routes/second.tsx"),

    route("*", "routes/404.tsx"),
  ]),
] satisfies RouteConfig;
