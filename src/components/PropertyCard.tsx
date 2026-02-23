import type { ReactNode } from 'react';
import type { Property } from '../data/properties';

type PropertyCardProps = {
  property: Property;
};

function StatIcon({ children }: { children: ReactNode }) {
  return <span className="text-xs font-semibold text-slate-600">{children}</span>;
}

function formatAmbientes(value: number) {
  if (value <= 0) {
    return 'Planta libre';
  }
  return `${value} amb.`;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow">
          {property.type}
        </span>
        <span className="absolute bottom-4 left-4 rounded-lg bg-ink-900/85 px-3 py-2 text-sm font-semibold text-white backdrop-blur">
          {property.price}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-2 text-lg font-bold leading-snug text-ink-900">{property.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{property.location}</p>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
          <StatIcon>{formatAmbientes(property.beds)}</StatIcon>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <StatIcon>{property.baths} baño{property.baths === 1 ? '' : 's'}</StatIcon>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <StatIcon>{property.area} m²</StatIcon>
        </div>

        <button className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700">
          Ver detalle
          <span aria-hidden="true" className="transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </article>
  );
}
