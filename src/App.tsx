import { Mail, Cpu, Layers, Sparkles, MessageCircle } from 'lucide-react';
import { useState } from 'react';

function App() {

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 pt-12 pb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-400 via-violet-400 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40 ring-1 ring-white/20">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">Tahai Consultores SPA</h1>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Main Message */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 text-cyan-300 px-5 py-2.5 rounded-full text-sm font-semibold mb-10 border border-cyan-400/40 backdrop-blur-md shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span className="bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">Proyectos digitales potenciados con IA</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-cyan-100 to-emerald-100 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-2xl">
                Gestionamos proyectos digitales potenciados con inteligencia artificial
              </h2>

              <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                Desarrollamos herramientas digitales, plataformas y software a medida.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="group bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-16 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 ring-1 ring-purple-400/10 hover:shadow-purple-500/30">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 via-violet-400 to-fuchsia-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-purple-500/50 ring-2 ring-purple-300/30 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent mb-4">
                    Co-ejecución desde la idea hasta la implementación
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Co-ejecutamos proyectos junto a nuestros clientes desde la idea hasta la implementación,
                    integrando tecnología, agilidad y soluciones con IA.
                  </p>
                </div>
              </div>
            </div>

            {/* Explore Projects Button */}
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-16 border border-cyan-500/20 ring-1 ring-white/5 text-center hover:border-cyan-400/40 transition-all duration-500">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent mb-6">
                De la idea al producto: nuestra tecnología en acción
              </h3>
              <a
                href="https://www.agroanalytics.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500/15 to-cyan-500/15 text-cyan-300 px-8 py-4 rounded-full text-base font-semibold border border-cyan-400/40 backdrop-blur-md shadow-lg shadow-cyan-500/20 ring-1 ring-white/10 hover:from-teal-500/25 hover:to-cyan-500/25 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                <span>Explorar nuestros proyectos</span>
              </a>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-xl rounded-3xl shadow-2xl p-12 text-center border border-emerald-500/20 ring-1 ring-white/5">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent mb-4">
                ¿Tienes un proyecto en mente?
              </h3>

              <p className="text-slate-300 mb-10 text-lg">
                Conversemos sobre cómo podemos ayudarte
              </p>

              <a
                href="https://wa.me/56997023645?text=%C2%A1Hola!%20Tengo%20un%20proyecto%20en%20mente.%20%C2%BFPodemos%20hablar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-10 py-4 rounded-xl font-bold hover:from-green-300 hover:to-emerald-400 transition-all hover:scale-105 shadow-xl shadow-green-500/40 ring-2 ring-white/20"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-10 mt-16">
          <div className="text-center text-slate-500 text-sm">
            <p className="font-medium">&copy; 2025 Tahai Consultores SPA. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
