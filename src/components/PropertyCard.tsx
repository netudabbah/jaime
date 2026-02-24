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
    <article className="overflow-hidden border border-slate-200 bg-white">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 bg-white px-2 py-1 text-xs font-semibold text-ink-900">
          {property.type}
        </span>
        <span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-sm font-semibold text-ink-900">
          {property.price}
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-ink-900">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{property.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-y border-slate-200 py-2">
          <StatIcon>{formatAmbientes(property.beds)}</StatIcon>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <StatIcon>{property.baths} baño{property.baths === 1 ? '' : 's'}</StatIcon>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <StatIcon>{property.area} m²</StatIcon>
        </div>

        <button className="inline-flex items-center border border-slate-300 px-3 py-1.5 text-sm text-ink-900 transition-colors hover:bg-slate-50">
          Ver detalle
        </button>
      </div>
    </article>
  );
}
