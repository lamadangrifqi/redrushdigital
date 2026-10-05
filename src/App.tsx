import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyWebsite } from './components/WhyWebsite';
import { Pricing } from './components/Pricing';
import { ConceptForm } from './components/ConceptForm';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function MainApp() {
  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(null);

  const handleSelectPortfolio = (id: string) => {
    setSelectedPortfolioId(id);
    const portfolioSection = document.getElementById('portofolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] dark:bg-[#0F111A] text-slate-900 dark:text-[#F8F9FF] selection:bg-[#2D3FE7] selection:text-white relative transition-colors duration-200">
      {/* 1. Navbar */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero */}
        <Hero onSelectPortfolio={handleSelectPortfolio} />

        {/* 3. Kenapa Perlu Website */}
        <WhyWebsite />

        {/* 4. Paket Harga */}
        <Pricing />

        {/* 5. Formulir Rancang Konsep Instan (Kirim Draft ke WA) */}
        <ConceptForm />

        {/* 6. Alur & Proses Pengerjaan */}
        <Process />

        {/* 7. Portofolio Mockup & Live Clients */}
        <Portfolio 
          selectedItem={selectedPortfolioId} 
          onCloseDetail={() => setSelectedPortfolioId(null)}
        />

        {/* 8. Testimoni UMKM & Jasa */}
        <Testimonials />

        {/* 9. CTA Penutup */}
        <ClosingCTA />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Tombol WhatsApp Mengambang */}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
