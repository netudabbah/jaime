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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={brand.logoPath}
            alt="Jaime Meta Propiedades"
            className="h-10 w-10 border border-slate-200 bg-white object-contain p-1"
          />
          <div className="leading-tight">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-ink-900">
              Jaime Meta
            </p>
            <p className="text-xs font-medium text-slate-500">Propiedades</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 transition-colors hover:text-brand-600"
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
          className="inline-flex h-9 w-9 items-center justify-center border border-slate-300 text-ink-900 transition-colors hover:border-slate-400 lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      <div
        className={`border-t border-slate-200 bg-white transition-[max-height,opacity] duration-200 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="section-shell flex flex-col gap-2 py-4" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-2 text-sm text-slate-700 transition-colors hover:text-brand-600"
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
