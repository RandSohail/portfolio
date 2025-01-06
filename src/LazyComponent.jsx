import {
  NavBar,
  Home,
  Expertise,
  History,
  Projects,
  Contact
} from './components';
function LazyComponent() {
  return (
    <>
      <NavBar />
      <Home />
      <Expertise />
      <History />
      <Projects />
      <Contact />
    </>
  );
}

export default LazyComponent;