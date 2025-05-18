import { NavBar } from "./components/navBar/navBar";
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
    </>
  );
}
