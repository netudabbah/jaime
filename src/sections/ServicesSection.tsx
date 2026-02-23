type Service = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const services: Service[] = [
  {
    title: 'Compra y Venta',
    description:
      'Gestión integral de compra y venta de locales, oficinas y activos comerciales con enfoque en precio, exposición y cierre.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5 10.5V20h14v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    ),
  },
  {
    title: 'Tasaciones',
    description:
      'Valuaciones profesionales para inmuebles comerciales y fondos de comercio según zona, metraje, frente y potencial operativo.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16" />
        <path d="M7 6v12" />
        <path d="M17 6v12" />
        <path d="M7 10l-3 4h6l-3-4Z" />
        <path d="M17 14l-3 4h6l-3-4Z" />
      </svg>
    ),
  },
  {
    title: 'Asesoramiento Inmobiliario',
    description:
      'Orientación para compradores, vendedores e inversores sobre ubicación, rentabilidad, tipo de operación y estrategia comercial.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3a7 7 0 0 0-7 7c0 5.2 7 11 7 11s7-5.8 7-11a7 7 0 0 0-7-7Z" />
        <path d="M12 8.5v3" />
        <path d="M12 15h.01" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 text-center">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Soluciones inmobiliarias con enfoque profesional</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Acompañamiento completo para operaciones comerciales más seguras, rentables y alineadas
            con el perfil de tu negocio o inversión.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group surface-panel h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-200 transition group-hover:bg-brand-500 group-hover:text-white group-hover:ring-brand-500">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
