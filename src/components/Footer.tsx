import { brand } from '../assets/brand';

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink-900 text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={brand.logoPath}
              alt="Jaime Meta Propiedades"
              className="h-12 w-12 rounded-lg border border-white/10 bg-white object-contain p-1"
            />
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em]">Jaime Meta</p>
              <p className="text-xs text-white/70">Propiedades</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Especialistas en operaciones inmobiliarias comerciales en Capital Federal: locales,
            oficinas, galerías y asesoramiento profesional para inversión y gestión.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/70 transition hover:text-brand-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Cuenca 356, Capital Federal</li>
            <li>4612-4662 / 4637-0243</li>
            <li>WhatsApp: 11-3794-2672</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jaime Meta Propiedades</p>
          <p>Diseño inmobiliario moderno y orientado a conversión</p>
        </div>
      </div>
    </footer>
  );
}
