import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Bharat Biograpthy InProgress!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
