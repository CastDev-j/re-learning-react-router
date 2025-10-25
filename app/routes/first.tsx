import FirstTest from "~/components/features/first-test/first-test";
import type { Route } from "./+types/first";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Testing Framework" },
    { name: "description", content: "Welcome to the Testing Framework!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return {};
}

export default function FirstPage({ loaderData }: Route.ComponentProps) {
  return <FirstTest />;
}
