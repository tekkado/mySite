import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { SECTIONS } from "./sections";

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        {SECTIONS.map(({ id, title, Component }) => (
          <Component key={id} id={id} title={title} />
        ))}
      </main>
      <Footer />
    </>
  );
}
