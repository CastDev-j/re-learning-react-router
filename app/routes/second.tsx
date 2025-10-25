import SecondTest from "~/components/features/second-test/second-test";
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

export default function SecondPage({ loaderData }: Route.ComponentProps) {
  return <SecondTest />;
}
