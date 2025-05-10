import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background poppins-regular">
        <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 flex justify-center">
          <div className="w-full md:w-11/12 flex h-14 items-center justify-between max-w-7xl md:px-0 px-6">
            <span className="font-bold">HR.</span>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-sm font-medium hover:text-primary"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="text-sm font-medium hover:text-primary"
                >
                  Education
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium hover:text-primary"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium hover:text-primary"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-primary"
                >
                  Contact
                </a>
              </nav>
              <ModeToggle />
            </div>
          </div>
        </header>

        <main className=" py-20 w-full flex justify-center items-center ">
          <div className="w-full md:w-11/12 max-w-7xl mx-auto md:px-0 px-6">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>

        <footer className="border-t">
          <div className="container py-6 text-center text-sm">
            © 2024 Hibbanur Rahman. All rights reserved.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
