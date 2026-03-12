import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemStorytelling } from "@/components/ProblemStorytelling";
import { Solution } from "@/components/Solution";
import { LeadMagnet } from "@/components/LeadMagnet";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemStorytelling />
      <Solution />
      <LeadMagnet />
      <ContactForm />
      <Footer />
      <AIChat />
    </main>
  );
}
