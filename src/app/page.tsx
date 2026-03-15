import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemStorytelling } from "@/components/ProblemStorytelling";
import { Solution } from "@/components/Solution";
import { CaseStudy } from "@/components/CaseStudy";
import { AboutUs } from "@/components/AboutUs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemStorytelling />
      <Solution />
      <CaseStudy />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  );
}
