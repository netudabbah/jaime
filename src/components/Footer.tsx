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
    <footer className="border-t border-slate-200 bg-slate-100 text-ink-900">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={brand.logoPath}
              alt="Jaime Meta Propiedades"
              className="h-11 w-11 border border-slate-300 bg-white object-contain p-1"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.08em]">Jaime Meta</p>
              <p className="text-xs text-slate-600">Propiedades</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Navegación</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-700 transition-colors hover:text-brand-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-900">Contacto</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>Cuenca 356, Capital Federal</li>
            <li>4612-4662 / 4637-0243</li>
            <li>WhatsApp: 11-3794-2672</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="section-shell flex flex-col gap-2 py-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jaime Meta Propiedades</p>
          <p>Cuenca 356, Capital Federal</p>
        </div>
      </div>
    </footer>
  );
}
