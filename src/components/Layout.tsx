import React from 'react';
import { Hero } from './Hero';
import { Credentials } from './Credentials';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="wrap flex items-center justify-between w-full">
          <a href="#hero" className="wordmark">
            <span>Sravani Samavedam</span>
            <span className="wordmark-cma">CMA</span>
          </a>

          <nav className="hidden md:flex nav-links" aria-label="Main Navigation">
            <a href="#credentials" className="nav-link">01 / Credentials</a>
            <a href="#experience" className="nav-link">02 / Experience</a>
            <a href="#education" className="nav-link">03 / Education</a>
            <a href="#skills" className="nav-link">04 / Competencies</a>
            <a href="#contact" className="nav-link">05 / Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/CMA_SravaniSamavedam_Resume.pdf"
              download="CMA_SravaniSamavedam_Resume.pdf"
              className="btn-primary"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Credentials />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
