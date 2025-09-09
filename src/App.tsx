import React from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
