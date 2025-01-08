import {
  NavBar,
  Home,
  Expertise,
  CareerHistory,
  Projects,
  Contact
} from './components';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Home />
      <Expertise />
      <CareerHistory />
      <Projects />
      <Contact />
    </>
  );
}
