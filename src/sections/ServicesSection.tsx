const services = [
  'Compra y venta de propiedades',
  'Tasaciones',
  'Asesoramiento inmobiliario',
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-12 sm:py-14">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Servicios</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Atención directa para operaciones inmobiliarias con asesoramiento profesional y trato
            personalizado.
          </p>
        </div>

        <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-3 px-4 py-4 text-sm text-ink-900 sm:text-base">
              <span className="text-brand-600">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
