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

          <nav className="nav-links" aria-label="Main Navigation">
            <a href="#credentials" className="nav-link">
              <span className="hidden lg:inline text-amber-700">01 / </span>Credentials
            </a>
            <a href="#experience" className="nav-link">
              <span className="hidden lg:inline text-amber-700">02 / </span>Experience
            </a>
            <a href="#education" className="nav-link">
              <span className="hidden lg:inline text-amber-700">03 / </span>Education
            </a>
            <a href="#skills" className="nav-link">
              <span className="hidden lg:inline text-amber-700">04 / </span>Competencies
            </a>
            <a href="#contact" className="nav-link">
              <span className="hidden lg:inline text-amber-700">05 / </span>Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/CMA_SravaniSamavedam_Resume.pdf"
              download="CMA_SravaniSamavedam_Resume.pdf"
              className="btn-primary"
            >
              <span className="hidden sm:inline">Resume PDF</span>
              <span className="sm:hidden">Resume</span> ↗
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
