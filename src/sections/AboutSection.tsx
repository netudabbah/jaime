const aboutImage =
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80';

export function AboutSection() {
  return (
    <section id="nosotros" className="py-12 sm:py-14">
      <div className="section-shell grid items-start gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="overflow-hidden border border-slate-200 bg-slate-100">
          <img
            src={aboutImage}
            alt="Fachada de edificio en Buenos Aires"
            className="h-[260px] w-full object-cover sm:h-[340px]"
            loading="lazy"
          />
        </div>

        <div>
          <span className="section-eyebrow">Nosotros</span>
          <h2 className="section-title">Sobre Jaime Meta Propiedades</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Jaime Meta Propiedades es una inmobiliaria con años de trayectoria en el mercado de
            Capital Federal.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Nos especializamos en la compra, venta y alquiler de propiedades, brindando atención
            directa y asesoramiento personalizado en cada operación.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Nuestro compromiso es ofrecer un servicio serio, claro y confiable.
          </p>
        </div>
      </div>
    </section>
  );
}
