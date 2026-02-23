import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { PropertiesSection } from './sections/PropertiesSection';
import { ServicesSection } from './sections/ServicesSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Header />
      <main>
        <HeroSection />
        <PropertiesSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
