import { useState } from 'react';
import { Button } from './Button';
import { brand } from '../assets/brand';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Propiedades', href: '#propiedades' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={brand.logoPath}
            alt="Jaime Meta Propiedades"
            className="h-11 w-11 rounded-lg border border-slate-200 bg-white object-contain p-1"
          />
          <div className="leading-tight">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-ink-900">
              Jaime Meta
            </p>
            <p className="text-xs font-medium text-slate-500">Propiedades</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contacto">
            <Button as="span">Publicar Propiedad</Button>
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-ink-900 transition hover:border-brand-300 hover:text-brand-600 lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        className={`border-t border-slate-100 bg-white/95 transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-brand-600"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="pt-2">
            <Button as="span" className="w-full">
              Publicar Propiedad
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
