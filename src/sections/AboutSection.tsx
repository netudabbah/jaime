const aboutImage =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80';

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 sm:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden rounded-3xl shadow-card">
          <img
            src={aboutImage}
            alt="Edificio corporativo"
            className="h-[360px] w-full object-cover sm:h-[440px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur">
            <p className="text-sm font-semibold">Atención cercana, criterio profesional</p>
          </div>
        </div>

        <div>
          <span className="section-eyebrow">Nosotros</span>
          <h2 className="section-title">Sobre Jaime Meta Propiedades</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            En Jaime Meta Propiedades nos especializamos en operaciones inmobiliarias comerciales:
            locales, oficinas, puestos en galerías, inmuebles aptos para renta y espacios con
            potencial de explotación. Trabajamos con foco en ubicación, flujo peatonal, perfil de
            rubro y viabilidad comercial.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            También gestionamos operaciones residenciales cuando encajan con la necesidad del
            cliente, pero nuestra fortaleza está en el mercado comercial. Acompañamos cada proceso
            con atención personalizada, análisis profesional y seguimiento cercano hasta el cierre.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Experiencia comercial', 'Trayectoria en operaciones de locales y oficinas en CABA.'],
              ['Atención personalizada', 'Seguimiento directo según rubro, zona y objetivo.'],
              ['Gestión confiable', 'Análisis, documentación y acompañamiento en cada etapa.'],
              ['Visión de negocio', 'Criterio para evaluar ubicación, tránsito y rentabilidad.'],
            ].map(([title, text]) => (
              <div key={title} className="surface-panel p-4">
                <h3 className="text-sm font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
